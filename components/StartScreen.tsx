'use client'

import { Terminal } from 'lucide-react'

interface StartScreenProps {
  onStart: () => void
  totalQuestions: number
}

export default function StartScreen({ onStart, totalQuestions }: StartScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-6">
              <Terminal className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Linux Exam Quiz
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
              Test Your Knowledge
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              {totalQuestions} Questions • Operating Systems Exam
            </p>
          </div>

          <div className="mb-8 space-y-4 text-left bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Instructions:
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                <span>Answer all {totalQuestions} questions one by one</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                <span>Use Next and Back buttons to navigate</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                <span>You can change your answer before submitting</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                <span>View your results after completing all questions</span>
              </li>
            </ul>
          </div>

          <button
            onClick={onStart}
            className="w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
          >
            Start Linux Exam
          </button>
        </div>
      </div>
    </div>
  )
}
