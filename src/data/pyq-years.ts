export type PyqYear = "2026" | "2025";

export const PYQ_YEAR_OPTIONS: { value: PyqYear; label: string; hint: string }[] = [
  {
    value: "2026",
    label: "2026",
    hint: "Structured MCQs with lecture links (course assignments)",
  },
  {
    value: "2025",
    label: "2025",
    hint: "Structured MCQs from Jan 2025 NPTEL session export (11 weeks; week 12 not in extract)",
  },
];
