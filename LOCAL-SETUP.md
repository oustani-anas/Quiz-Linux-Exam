# Local Development Setup

## Quick Start

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

- `app/` - Next.js app directory
  - `page.tsx` - Main page component
  - `api/` - API routes for questions and answers
- `components/` - React components
  - `StartScreen.tsx` - Welcome screen
  - `QuizComponent.tsx` - Question display
  - `ResultsScreen.tsx` - Results display
- `questions.json` - Quiz questions data
- `answers.json` - Correct answers data

## Troubleshooting

### Port 3000 already in use
If port 3000 is already in use, you can change it:
```bash
PORT=3001 npm run dev
```

### Dependencies not installed
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
Check that all files are present:
- `questions.json`
- `answers.json`
- All component files in `components/`
- All app files in `app/`

## Notes

- The app loads questions and answers from JSON files via API routes
- Development server supports hot reload
- TypeScript is configured for type checking
