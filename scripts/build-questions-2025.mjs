/**
 * One-off / repeatable: parse public/pyq/nptel-2025-assignments.txt into
 * src/data/questions-2025.ts (structured Question[]).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcPath = path.join(root, "public", "pyq", "nptel-2025-assignments.txt");
const outPath = path.join(root, "src", "data", "questions-2025.ts");

function shouldDropLine(line) {
  const t = line.trim();
  if (!t) return true;
  if (/^--\s*\d+\s+of\s+\d+\s+--$/.test(t)) return true;
  if (t.includes("(https://")) return true;
  if (t.includes("@nsut.ac.in")) return true;
  if (/^NPTEL »/.test(t)) return true;
  if (/^Click to register/.test(t)) return true;
  if (/^If already$/.test(t)) return true;
  if (/^registered,/.test(t)) return true;
  if (/^for Certification/.test(t)) return true;
  if (/^exam\s*$/.test(t)) return true;
  if (/^Course\s*$/.test(t)) return true;
  if (/^outline$/.test(t)) return true;
  if (/^About NPTEL/.test(t)) return true;
  if (t === "()") return true;
  if (/^How does an$/.test(t)) return true;
  if (/^NPTEL online$/.test(t)) return true;
  if (/^course work\?$/.test(t)) return true;
  if (/^Week \d+ \(\)$/.test(t)) return true;
  if (/^Lecture \d/.test(t)) return true;
  if (/^Materials/.test(t)) return true;
  if (/^Tutorial/.test(t)) return true;
  if (/^Feedback/.test(t)) return true;
  if (/^Form:/.test(t)) return true;
  if (/^Quiz:/.test(t)) return true;
  if (/^Download$/.test(t)) return true;
  if (/^Videos/.test(t)) return true;
  if (/^Text$/.test(t)) return true;
  if (/^Transcript/.test(t)) return true;
  if (/^Problem$/.test(t)) return true;
  if (/^Solving/.test(t)) return true;
  if (/^Session/.test(t)) return true;
  if (/^Books/.test(t)) return true;
  if (/^name=/.test(t)) return true;
  if (/^assessment\?/.test(t)) return true;
  if (/^unit\?/.test(t)) return true;
  if (/^unit=/.test(t)) return true;
  if (/^\d+\)\s+1 point$/.test(t)) return true;
  if (/^The due date/.test(t)) return true;
  if (/^Due on /.test(t)) return true;
  if (/^Assignment submitted/.test(t)) return true;
  if (/^As per our records/.test(t)) return true;
  if (/^Your last recorded submission/.test(t)) return true;
  if (/^Due date:/.test(t)) return true;
  if (/^$/.test(t)) return true;
  if (/^X$/.test(t)) return true;
  if (/^payment status/.test(t)) return true;
  if (/^Case_Study/.test(t)) return true;
  if (/^Case Study/.test(t)) return true;
  if (/^Course_Finale/.test(t)) return true;
  if (/^Ethics in/.test(t)) return true;
  if (/^Emotionally/.test(t)) return true;
  if (/^Machines Part-/.test(t)) return true;
  if (/^week \d+$/.test(t)) return true;
  if (/^You may submit any number/.test(t)) return true;
  if (/^Submit Answers/.test(t)) return true;
  if (/^S$/.test(t)) return true;
  if (/^week \d+$/i.test(t)) return true;
  if (/^to check your$/i.test(t)) return true;
  if (/^click$/i.test(t)) return true;
  if (/^registered, click$/i.test(t)) return true;
  if (/^\d{4}\s*\(\)\s*$/.test(t)) return true;
  return false;
}

function norm(s) {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/['’]/g, "'");
}

function looksLikeQuestionStart(L) {
  if (/[?？]\s*$/.test(L)) return true;
  return /^(Which|What|How|When|Why|If |In |During|From |A |An |The |Learners|You |Data |User |Wearable|Thermal|Analyzing|Dominance|Dynamic|Sequential|As |It |Tendency|Camera |Parallel|Cognitive|A machine|How can|Who |Privacy|From an|Emotional |For |When |Microphone|GPS|Calls|To |All |Dominance|In the |A set|A virtual|Often |Emotion|Emotions|Dominance allows|A set of|Analyzing multiple|Wearable devices|Thermal cameras|What type|What kind|What does|What are|What is|Which frame|Which of|Who should|Why is|Why are|When conducting|When dealing|Where |While |With |Within |Without |Your |I |Is |Are |Does |Do |Can |Could |Should |Would |Will |May |Must |Has |Have |Had |Was |Were |Being |Being a|Students|Systems|Systems such|Systems like|Systems that|Software|Some |Such |Studies|Study |Subtle|Social|Sequential|Self-|Sensor|Signals|Signal |Similar|Simple|Since|So |Sometimes|Somewhat|Soon |Sorry|Sort |Sound|Source|South|Space|Spanish|Speak|Speaker|Specific|Speech|Speed|Spent|Split|Spoken|Spontaneous|Spring|Square|Stability|Stable|Stack|Staff|Stage|Stains|Standard|Standards|Standing|Star|Start|Started|Starting|State|States|Static|Station|Statistical|Status|Stay|Steady|Step|Steps|Still|Stimulus|Stimuli|Stop|Storage|Store|Stories|Story|Straight|Strain|Strategies|Strategy|Stream|Streams|Street|Strength|Stress|Stretch|String|Strip|Strong|Strongly|Structural|Structure|Structured|Struggle|Student|Study |Style|Styles|Subjective|Subsequent|Substantial|Substitute|Subtle|Success|Successful|Successfully|Such |Sudden|Suffer|Sufficient|Suggest|Suggested|Suitable|Sum |Summary|Sun |Super|Superior|Supervised|Support|Supported|Supporting|Suppose|Supposed|Surface|Surgery|Surprise|Surprised|Surprising|Surprisingly|Survey|Survival|Survive|Susceptible|Suspicious|Sustain|Sustainable|Swap|Swedish|Switch|Switched|Symbol|Symbolic|Symbols|Symmetry|Sympathetic|Symptoms|Syndrome|Synthesis|Synthetic|System|Systematic|Systems|Szeged)/.test(
    L
  );
}

function cleanAnswerText(text) {
  let t = text.trim();
  const w = t.search(/\bWeek\s+\d+\s*:\s*Assignment\b/i);
  if (w >= 0) t = t.slice(0, w).trim();
  const c = t.search(/\bto check your\b/i);
  if (c >= 0) t = t.slice(0, c).trim();
  return t;
}

function readAnswerLines(lines, i) {
  // i = index of "Accepted Answers:" line
  let j = i + 1;
  if (j >= lines.length) return { text: "", nextJ: j };
  const parts = [lines[j].trim()];
  j++;
  // At most one continuation line (wrapped sentences in PDF)
  if (j < lines.length) {
    const L = lines[j];
    if (/^(Yes|No), the answer/.test(L)) {
      return { text: cleanAnswerText(parts.join(" ")), nextJ: j };
    }
    if (/^(True|False)$/.test(L)) {
      return { text: cleanAnswerText(parts.join(" ")), nextJ: j };
    }
    const cont =
      /^[a-z(]/.test(L) ||
      (/^emotions\b/i.test(L) && parts[0].toLowerCase().includes("while induced"));
    if (cont && !looksLikeQuestionStart(L)) {
      parts.push(L.trim());
      j++;
    }
  }
  return { text: cleanAnswerText(parts.join(" ").replace(/\s+/g, " ")), nextJ: j };
}

function parseOptionsAndStem(buffer, answerText) {
  const b = buffer
    .filter((x) => {
      const t = x.trim();
      if (!t) return false;
      if (/^\d{4}\s*\(\)\s*$/.test(t)) return false;
      return true;
    })
    .map((x) => x.replace(/^\d+\.\s*/, "").trim());
  if (b.length < 3) return null;

  const ansN = norm(answerText);

  function tryTake(n) {
    if (b.length < n + 1) return null;
    const opts = b.slice(-n);
    const stemLines = b.slice(0, -n);
    const stem = stemLines.join(" ").replace(/\s+/g, " ").trim();
    if (!stem) return null;
    const matchIdx = opts.findIndex((o) => norm(o) === ansN);
    if (matchIdx < 0) return null;
    return { stem, opts, correctIdx: matchIdx };
  }

  // True / False
  if (b.length >= 2 && b[b.length - 2] === "True" && b[b.length - 1] === "False") {
    const t = tryTake(2);
    if (t) {
      const correct = t.opts[t.correctIdx] === "True" ? "a" : "b";
      return {
        stem: t.stem,
        options: [
          { id: "a", text: "True" },
          { id: "b", text: "False" },
        ],
        correctAnswer: correct,
      };
    }
  }

  for (const n of [4, 3, 5, 6]) {
    const t = tryTake(n);
    if (!t) continue;
    const ids = ["a", "b", "c", "d", "e", "f"];
    return {
      stem: t.stem,
      options: t.opts.map((text, i) => ({ id: ids[i], text })),
      correctAnswer: ids[t.correctIdx],
    };
  }

  // Fuzzy: answer might wrap differently
  const last4 = b.slice(-4);
  const stem = b.slice(0, -4).join(" ").replace(/\s+/g, " ").trim();
  const idx = last4.findIndex((o) => norm(o).includes(ansN) || ansN.includes(norm(o)));
  if (idx >= 0 && stem) {
    const ids = ["a", "b", "c", "d"];
    return {
      stem,
      options: last4.map((text, i) => ({ id: ids[i], text })),
      correctAnswer: ids[idx],
    };
  }

  return null;
}

/** Read 1–2 accepted-answer lines (NPTEL partial credit gives two lines). */
function readAcceptedAnswerLines(lines, acceptedHeaderIdx) {
  let j = acceptedHeaderIdx + 1;
  if (j >= lines.length) return { primary: "", secondary: null, nextJ: j };
  const first = lines[j].trim();
  j++;
  if (j >= lines.length) return { primary: cleanAnswerText(first), secondary: null, nextJ: j };
  const second = lines[j].trim();
  if (/^(Yes|No), the answer/.test(second))
    return { primary: cleanAnswerText(first), secondary: null, nextJ: j };
  if (/^Partially Correct/.test(second))
    return { primary: cleanAnswerText(first), secondary: null, nextJ: j };
  if (looksLikeQuestionStart(second) || /^Which\b/.test(second))
    return { primary: cleanAnswerText(first), secondary: null, nextJ: j };
  if (/^(True|False)$/.test(second) && /^(True|False)$/.test(first))
    return { primary: cleanAnswerText(first), secondary: null, nextJ: j };
  return {
    primary: cleanAnswerText(first),
    secondary: cleanAnswerText(second),
    nextJ: j + 1,
  };
}

function findScoreAcceptedIndices(lines, feedbackIdx) {
  const immediateScore = (lines[feedbackIdx + 1] || "").trim();
  const immediateAcc = (lines[feedbackIdx + 2] || "").trim();
  if (
    /^\s*Score:\s*[\d.]+\s*$/.test(immediateScore) &&
    immediateAcc === "Accepted Answers:"
  ) {
    return { scoreIdx: feedbackIdx + 1, accIdx: feedbackIdx + 2 };
  }
  for (
    let k = feedbackIdx + 1;
    k < Math.min(feedbackIdx + 60, lines.length);
    k++
  ) {
    if (/^\s*Score:\s*[\d.]+\s*$/.test((lines[k] || "").trim())) {
      const acc = (lines[k + 1] || "").trim();
      if (acc === "Accepted Answers:") return { scoreIdx: k, accIdx: k + 1 };
    }
  }
  return null;
}

function parseFile(raw) {
  const rawLines = raw.split(/\r?\n/);
  const lines = [];
  for (const line of rawLines) {
    if (!shouldDropLine(line)) lines.push(line.trimEnd());
  }

  let week = 1;
  const questions = [];
  let buffer = [];
  let qInWeek = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const wm = line.match(/^Week\s*(\d+)\s*:\s*Assignment\s*\d+/i);
    if (wm) {
      week = parseInt(wm[1], 10);
      qInWeek = 0;
      buffer = [];
      continue;
    }

    const feedbackYes = /^Yes, the answer is correct\.\s*$/.test(line);
    const feedbackNo = /^No, the answer is incorrect\.\s*$/.test(line);
    const feedbackPartial = /^Partially Correct\.\s*$/.test(line);
    if (feedbackYes || feedbackNo || feedbackPartial) {
      const loc = findScoreAcceptedIndices(lines, i);
      if (!loc) {
        buffer.push(line);
        continue;
      }
      const scoreLine = lines[loc.scoreIdx];
      const accIdx = loc.accIdx;
      let answerText;
      let nextJ;
      let partialNote = "";
      if (feedbackPartial) {
        const acc = readAcceptedAnswerLines(lines, accIdx);
        answerText = acc.primary;
        if (acc.secondary) partialNote = ` NPTEL also listed as accepted: ${acc.secondary}.`;
        nextJ = acc.nextJ;
      } else {
        const t = readAnswerLines(lines, accIdx);
        answerText = t.text;
        nextJ = t.nextJ;
      }
      const parsed = parseOptionsAndStem(buffer, answerText);
      if (!parsed) {
        console.error("PARSE FAIL week", week, "buffer tail:", buffer.slice(-8), "answer:", answerText);
        buffer = [];
        i = nextJ - 1;
        continue;
      }
      qInWeek += 1;
      const id = `y2025-w${week}-q${qInWeek}`;
      const score = parseFloat((String(scoreLine).match(/[\d.]+/) || ["0"])[0]);
      const feedbackLabel = feedbackPartial
        ? "marked partially correct"
        : feedbackYes
          ? "marked correct"
          : "marked incorrect";
      const explanation =
        `NPTEL Affective Computing (Jan 2025 session), Week ${week} assignment. ` +
        `Exported attempt was ${feedbackLabel} (score ${score}). ` +
        `Accepted answer on portal: ${answerText.replace(/\.\s*$/, "")}.${partialNote}`;

      let qText = parsed.stem;
      if (/\bstim$/i.test(qText)) qText = `${qText}uli`;

      questions.push({
        id,
        week,
        topic: `Week ${week} assignment (2025)`,
        sourceType: "past-question",
        questionText: qText,
        options: parsed.options,
        correctAnswer: parsed.correctAnswer,
        explanation,
        difficulty: "medium",
        tags: ["2025", "nptel", `week-${week}`],
      });
      buffer = [];
      i = nextJ - 1;
      continue;
    }

    buffer.push(line);
    if (buffer.length > 80) {
      console.warn("Buffer overflow week", week, "truncating");
      buffer = buffer.slice(-40);
    }
  }

  return questions;
}

const raw = fs.readFileSync(srcPath, "utf8");
const qs = parseFile(raw);
console.log("Parsed", qs.length, "questions");

const header = `import type { Question } from "@/lib/types";

/** Parsed from NPTEL Jan 2025 session assignment export (PDF text). IDs: y2025-w{n}-q{k}. */
export const questions2025: Question[] = `;

function esc(s) {
  return JSON.stringify(s);
}

const body =
  "[\n" +
  qs
    .map(
      (q) =>
        `  {\n` +
        `    id: ${esc(q.id)},\n` +
        `    week: ${q.week},\n` +
        `    topic: ${esc(q.topic)},\n` +
        `    sourceType: ${esc(q.sourceType)},\n` +
        `    questionText: ${esc(q.questionText)},\n` +
        `    options: ${JSON.stringify(q.options, null, 6).replace(/\n/g, "\n    ")},\n` +
        `    correctAnswer: ${esc(q.correctAnswer)},\n` +
        `    explanation: ${esc(q.explanation)},\n` +
        `    difficulty: ${esc(q.difficulty)},\n` +
        `    tags: ${JSON.stringify(q.tags)},\n` +
        `  }`
    )
    .join(",\n") +
  "\n];\n";

fs.writeFileSync(outPath, header + body, "utf8");
console.log("Wrote", outPath);
