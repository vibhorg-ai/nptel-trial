# NPTEL Affective Computing Prep

A study and quiz platform for the 2026 NPTEL Affective Computing course. Study concepts week-by-week, practice with assignment-style questions, review explanations, and test yourself with timed mock exams.

## Features

- **Week-by-week study pages** with summaries, key concepts, important terms, and common confusions
- **Practice quizzes** with instant feedback and detailed explanations
- **Review mode** that retries only your missed questions
- **Mock exam mode** with timer and mixed-topic questions
- **Progress tracking** per week with accuracy and attempt history (stored in localStorage)
- **80 curated questions** across 8 weeks covering all major topics
- **Dark mode support** via system preference

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
}
```

Study content for each week is in `src/data/weeks.ts`.

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
