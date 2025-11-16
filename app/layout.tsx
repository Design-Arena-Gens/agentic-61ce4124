import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Laxmi Narayan Bartan Bhandar - Immersion Rod',
  description: 'सर्दियों में गरम पानी की ज़रूरत के लिए बेहतरीन immersion rod - सिर्फ ₹250 से शुरू',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
