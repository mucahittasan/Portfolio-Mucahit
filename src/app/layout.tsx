import './globals.css'

import { Poppins } from 'next/font/google'
import { Orbitron } from 'next/font/google'

// Components
import ClientOnly from '@/components/ClientOnly'
import Navbar from '@/components/navbar'
import Container from '@/components/Container'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Mucahit | Home',
  description: 'Mucahit tasan portfolio home page',
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins"
})


const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-orbitron"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/favicon.png" />
      </head>
      <body className={`${poppins.className} ${orbitron.variable}`}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <Container className='pt-16 min-h-screen flex flex-col'>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  )
}
