import './globals.css'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Mucahit',
  description: 'Mucahit tasan portfolio website',
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins"
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
