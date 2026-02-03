'use client'

import { CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: {
    A: string
    B: string
    C: string
    D: string
  }
}

interface Answer {
  question_id: number
  correct_answer: string
}

interface UserAnswer {
  questionId: number
  selectedAnswer: string
}

interface ResultsScreenProps {
  questions: Question[]
  answers: Answer[]
  userAnswers: UserAnswer[]
  onRestart: () => void
}

export default function ResultsScreen({
  questions,
  answers,
  userAnswers,
  onRestart
}: ResultsScreenProps) {
  const calculateResults = () => {
    let correct = 0
    const results = questions.map((question) => {
      const correctAnswer = answers.find(a => a.question_id === question.id)
      const userAnswer = userAnswers.find(a => a.questionId === question.id)
      const isCorrect = userAnswer?.selectedAnswer === correctAnswer?.correct_answer
      
      if (isCorrect) correct++
      
      return {
        question,
        userAnswer: userAnswer?.selectedAnswer || 'Not answered',
        correctAnswer: correctAnswer?.correct_answer || '',
        isCorrect
      }
    })

    return { correct, total: questions.length, results }
  }

  const { correct, total, results } = calculateResults()
  const percentage = Math.round((correct / total) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Summary Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-6">
            <Trophy className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Quiz Completed!
          </h1>
          <div className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
            {percentage}%
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            You got <span className="font-bold text-indigo-600 dark:text-indigo-400">{correct}</span> out of{' '}
            <span className="font-bold">{total}</span> questions correct
          </p>
          <button
            onClick={onRestart}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Restart Quiz
          </button>
        </div>

        {/* Results List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Detailed Results
          </h2>
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            {results.map((result, index) => (
              <div
                key={result.question.id}
                className={`p-5 rounded-xl border-2 ${
                  result.isCorrect
                    ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
                    : 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    {result.isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
                    )}
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      Question {result.question.id}
                    </span>
                  </div>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      result.isCorrect
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                    }`}
                  >
                    {result.isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 mb-4 ml-9">
                  {result.question.question}
                </p>
                <div className="ml-9 space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 w-32">
                      Your answer:
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        result.isCorrect
                          ? 'text-green-700 dark:text-green-300'
                          : 'text-red-700 dark:text-red-300'
                      }`}
                    >
                      {result.userAnswer}
                      {!result.isCorrect && (
                        <span className="ml-2 text-gray-500 dark:text-gray-400">
                          ({result.question.options[result.userAnswer as 'A' | 'B' | 'C' | 'D']})
                        </span>
                      )}
                    </span>
                  </div>
                  {!result.isCorrect && (
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 w-32">
                        Correct answer:
                      </span>
                      <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                        {result.correctAnswer}
                        <span className="ml-2 text-gray-500 dark:text-gray-400">
                          ({result.question.options[result.correctAnswer as 'A' | 'B' | 'C' | 'D']})
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
