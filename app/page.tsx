'use client'

import { useState, useEffect } from 'react'
import QuizComponent from '@/components/QuizComponent'
import StartScreen from '@/components/StartScreen'
import ResultsScreen from '@/components/ResultsScreen'

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

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [answers, setAnswers] = useState<Answer[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
  const [isStarted, setIsStarted] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load questions and answers
    Promise.all([
      fetch('/api/questions').then(res => res.json()),
      fetch('/api/answers').then(res => res.json())
    ]).then(([questionsData, answersData]) => {
      setQuestions(questionsData.questions)
      setAnswers(answersData.correct_answers)
      setLoading(false)
    }).catch(err => {
      console.error('Error loading data:', err)
      setLoading(false)
    })
  }, [])

  const handleStart = () => {
    setIsStarted(true)
    setCurrentQuestionIndex(0)
    setUserAnswers([])
  }

  const handleAnswerSelect = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex]
    const updatedAnswers = [...userAnswers]
    const existingAnswerIndex = updatedAnswers.findIndex(
      a => a.questionId === currentQuestion.id
    )

    if (existingAnswerIndex >= 0) {
      updatedAnswers[existingAnswerIndex].selectedAnswer = answer
    } else {
      updatedAnswers.push({
        questionId: currentQuestion.id,
        selectedAnswer: answer
      })
    }

    setUserAnswers(updatedAnswers)
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setIsFinished(true)
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleRestart = () => {
    setIsStarted(false)
    setIsFinished(false)
    setCurrentQuestionIndex(0)
    setUserAnswers([])
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading questions...</p>
        </div>
      </div>
    )
  }

  if (!isStarted) {
    return <StartScreen onStart={handleStart} totalQuestions={questions.length} />
  }

  if (isFinished) {
    return (
      <ResultsScreen
        questions={questions}
        answers={answers}
        userAnswers={userAnswers}
        onRestart={handleRestart}
      />
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const userAnswer = userAnswers.find(a => a.questionId === currentQuestion.id)

  return (
    <QuizComponent
      question={currentQuestion}
      currentIndex={currentQuestionIndex}
      totalQuestions={questions.length}
      selectedAnswer={userAnswer?.selectedAnswer || null}
      onAnswerSelect={handleAnswerSelect}
      onNext={handleNext}
      onBack={handleBack}
    />
  )
}
