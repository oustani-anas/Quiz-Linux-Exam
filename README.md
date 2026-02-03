<<<<<<< HEAD
# Quiz-Linux-Exam
linux exam webapp Quiz
=======
# Linux Quiz Application

A Next.js web application for testing Linux and Unix command knowledge with 60 multiple-choice questions.

## Features

- 🎯 60 Linux/Unix questions from the exam
- 📱 Responsive design with modern UI
- ⏮️⏭️ Navigate between questions with Back/Next buttons
- 📊 Detailed results screen showing correct/incorrect answers
- 🎨 Beautiful gradient UI with dark mode support
- 💾 Progress tracking during the quiz

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
qcm/
├── app/
│   ├── api/
│   │   ├── questions/route.ts    # API endpoint for questions
│   │   └── answers/route.ts      # API endpoint for answers
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                 # Main page component
├── components/
│   ├── QuizComponent.tsx        # Question display component
│   ├── ResultsScreen.tsx        # Results display component
│   └── StartScreen.tsx          # Welcome screen component
├── questions.json               # Questions data
├── answers.json                 # Correct answers data
└── package.json
```

## Usage

1. Click "Start Linux Exam" on the welcome screen
2. Answer each question by selecting an option (A, B, C, or D)
3. Use "Next" to proceed to the next question
4. Use "Back" to return to previous questions
5. After answering all 60 questions, view your results
6. See detailed feedback for each question (correct/incorrect)

## Technologies Used

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## License

MIT
>>>>>>> 822338a (Initial Linux quiz app)
