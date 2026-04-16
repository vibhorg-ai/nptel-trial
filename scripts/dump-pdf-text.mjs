import fs from "fs";
import { PDFParse } from "pdf-parse";

const pdfPath =
  process.argv[2] ||
  "C:/Users/Vibhorg/Downloads/Affective_computing_2025Assignments.pdf";
const outPath = process.argv[3] || "scripts/extracted-2025.txt";

const buf = fs.readFileSync(pdfPath);
const parser = new PDFParse({ data: new Uint8Array(buf) });
const result = await parser.getText();
fs.writeFileSync(outPath, result.text);
await parser.destroy();
console.log("Wrote", outPath, "chars:", result.text.length);
