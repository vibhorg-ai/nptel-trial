# NPTEL Affective Computing Prep

A study and quiz platform for the 2026 NPTEL Affective Computing course. Study concepts week-by-week, review lecture notes, practice with real assignment questions, use flashcards for key terms, and test yourself with timed mock exams.

## Features

- **12 weeks** of study material with summaries, key concepts, important terms, and common confusions
- **120 real 2026 assignment MCQs** (10 per week) with detailed explanations
- **Lecture Notes** extracted from all 12 weeks of course PDFs, with searchable content
- **PYQ/Assignments tab** showing all questions grouped by week with answers linked to lecture context
- **Practice quizzes** with instant feedback, explanations, and links to relevant lecture notes
- **Review mode** that retries only your missed questions
- **Mock exam mode** — timed 30-question test across all weeks
- **Flashcard mode** for key term memorization using importantTerms from each week
- **Bookmarks** — save questions during quizzes and review them later
- **Weak topic tracking** — dashboard highlights your focus areas based on accuracy
- **Keyboard shortcuts** — press A/B/C/D or 1/2/3/4 to select, Enter to advance
- **Option shuffling** — answer positions are randomized each session to prevent pattern memorization
- **Dark mode** with manual toggle (system/light/dark) and localStorage persistence
- **Progress tracking** per week with accuracy and attempt history (stored in localStorage)
- **Progress export/import** — back up or transfer your data across devices
- **Error boundaries** for graceful error recovery

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Questions

Questions are stored in `src/data/questions.ts`. Each question follows this structure:

```typescript
{
  id: "w1q1",
  week: 1,
  topic: "Definitions",
  sourceType: "assignment",
  questionText: "Your question here?",
  options: [
    { id: "a", text: "Option A" },
    { id: "b", text: "Option B" },
    { id: "c", text: "Option C" },
    { id: "d", text: "Option D" },
  ],
  correctAnswer: "b",
  explanation: "Detailed explanation of the correct answer.",
  difficulty: "easy",
  tags: ["tag1", "tag2"],
  notesRef: "Section Heading", // links to lecture notes section
}
```

Study content: `src/data/weeks.ts` | Lecture notes: `src/data/notes.ts` | Questions: `src/data/questions.ts`

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/nptel-affective-computing-quiz)

Or deploy manually:

```bash
npm run build
```

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- localStorage for progress persistence
