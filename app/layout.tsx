import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Linux Quiz - Test Your Knowledge',
  description: 'Test your Linux and Unix command knowledge with 60 questions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
