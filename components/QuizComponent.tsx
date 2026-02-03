'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

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

interface QuizComponentProps {
  question: Question
  currentIndex: number
  totalQuestions: number
  selectedAnswer: string | null
  onAnswerSelect: (answer: string) => void
  onNext: () => void
  onBack: () => void
}

export default function QuizComponent({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onBack
}: QuizComponentProps) {
  const [localSelected, setLocalSelected] = useState<string | null>(selectedAnswer)

  useEffect(() => {
    setLocalSelected(selectedAnswer)
  }, [selectedAnswer, question.id])

  const handleOptionClick = (option: string) => {
    setLocalSelected(option)
    onAnswerSelect(option)
  }

  const progress = ((currentIndex + 1) / totalQuestions) * 100
  const options = ['A', 'B', 'C', 'D'] as const

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {options.map((option) => {
              const optionText = question.options[option]
              const isSelected = localSelected === option
              
              return (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 transform hover:scale-[1.02] ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:border-indigo-500'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600'
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 font-semibold ${
                        isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {option}
                    </div>
                    <span
                      className={`text-lg ${
                        isSelected
                          ? 'text-indigo-900 dark:text-indigo-100 font-medium'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {optionText}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onBack}
              disabled={currentIndex === 0}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentIndex === 0
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back
            </button>

            <button
              onClick={onNext}
              className="flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              {currentIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
