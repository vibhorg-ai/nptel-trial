import fs from "fs";

function norm(s) {
  return s.replace(/\s+/g, " ").trim().toLowerCase();
}

const raw = fs.readFileSync("scripts/extracted-2025.txt", "utf8");

let currentWeek = 1;
const items = [];

let searchPos = 0;
while (searchPos < raw.length) {
  const accIdx = raw.indexOf("\nAccepted Answers:\n", searchPos);
  if (accIdx < 0) break;

  const before = raw.slice(0, accIdx);
  const mW = before.match(/Week (\d+)\s*:\s*Assignment[^\n]*$/m) || before.match(/Week (\d+)\s*:\s*Assignment/);
  if (mW) currentWeek = parseInt(mW[mW.length - 1], 10);

  const afterAcc = raw.slice(accIdx + "\nAccepted Answers:\n".length);
  const ansMatch = afterAcc.match(/^([^\n]+(?:\n[^\n]+?)?)(?=\n\n|\nWhich |\nWhat |\nHow |\nIn |\nWearable |\nThermal |\nAffective |\nThey |\nAnalyzing |\nDominance |\nA set |\nWeek |\n--|\nLecture |\nQuiz:)/s);
  let answerText = ansMatch ? ansMatch[1].trim().replace(/\s+/g, " ") : afterAcc.split("\n")[0].trim();

  const fbMatch = before.match(
    /([\s\S]*)\n(?:Yes, the answer is correct\.|No, the answer is incorrect\.|Partially Correct\.)\nScore:\s*[^\n]+\s*$/
  );
  if (!fbMatch) {
    searchPos = accIdx + 10;
    continue;
  }

  let body = fbMatch[1].trim();
  body = body.replace(
    /The due date for submitting this assignment has passed\.[\s\S]*?Assignment submitted on[^\n]+\s*/gi,
    ""
  );

  const lines = body
    .split(/\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  let i = lines.length - 1;
  const optsRev = [];
  while (i >= 0 && optsRev.length < 4) {
    const t = lines[i];
    if (/^Week |^Lecture |^Quiz:|^Download|^---|^Click to|^Problem|^Books|^Text|^NPTEL|^rithikesh/.test(t)) break;
    if (/^\d+\)\s*1 point/.test(t)) break;
    optsRev.unshift(lines[i]);
    i--;
  }
  let opts = optsRev;
  if (opts.length === 2 && opts[0] === "True" && opts[1] === "False") {
    /* tf */
  } else if (opts.length !== 4) {
    searchPos = accIdx + 20;
    continue;
  }

  const stemLines = [];
  while (i >= 0) {
    const t = lines[i];
    if (/^Week |^Lecture |^Quiz:|^Download|^---|^NPTEL|^rithikesh|^Click/.test(t)) break;
    if (/^\d+\)\s*1 point/.test(t)) break;
    stemLines.unshift(lines[i]);
    i--;
    if (stemLines.length > 25) break;
  }

  let questionText = stemLines.join(" ").replace(/\s+/g, " ").trim();
  if (questionText.length < 15) {
    searchPos = accIdx + 20;
    continue;
  }

  const ids = ["a", "b", "c", "d"];
  const options = opts.map((text, idx) => ({ id: ids[idx], text }));
  const correctNorm = norm(answerText);
  let correctAnswer = options.find((o) => norm(o.text) === correctNorm)?.id;
  if (!correctAnswer) {
    correctAnswer = options.find(
      (o) => correctNorm.includes(norm(o.text)) || norm(o.text).includes(correctNorm)
    )?.id;
  }
  if (!correctAnswer && opts[0] === "True" && opts[1] === "False") {
    if (correctNorm === "true") correctAnswer = "a";
    if (correctNorm === "false") correctAnswer = "b";
  }
  if (!correctAnswer) {
    searchPos = accIdx + 20;
    continue;
  }

  items.push({
    week: currentWeek,
    questionText,
    options,
    correctAnswer,
    correctText: answerText,
  });

  searchPos = accIdx + 30;
}

const seen = new Set();
const unique = [];
for (const it of items) {
  const key = norm(it.questionText).slice(0, 120);
  if (seen.has(key)) continue;
  seen.add(key);
  unique.push(it);
}

let ts = `import type { Question } from "@/lib/types";\n\n`;
ts += `/** Parsed from NPTEL 2025 assignment PDF (scripts/extracted-2025.txt). */\n`;
ts += `export const questions2025: Question[] = [\n`;
let n = 0;
for (const it of unique) {
  n++;
  const id = `y2025w${it.week}q${n}`;
  const optsStr = it.options
    .map((o) => `      { id: "${o.id}", text: ${JSON.stringify(o.text)} }`)
    .join(",\n");
  ts += `  {\n    id: ${JSON.stringify(id)},\n    week: ${it.week},\n    topic: "Week ${it.week} (2025 PYQ)",\n    sourceType: "past-question" as const,\n    questionText: ${JSON.stringify(it.questionText)},\n    options: [\n${optsStr},\n    ],\n    correctAnswer: ${JSON.stringify(it.correctAnswer)},\n    explanation: ${JSON.stringify(`NPTEL 2025: ${it.correctText}`)},\n    difficulty: "medium" as const,\n    tags: ["2025", "pyq"],\n  },\n`;
}
ts += `];\n`;
fs.writeFileSync("src/data/questions-2025.ts", ts);
console.log("Wrote count:", unique.length);
