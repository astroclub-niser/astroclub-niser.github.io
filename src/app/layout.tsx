import './globals.css'
import '../../styles/main.min.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import localFont from 'next/font/local'
// rafce

const inter = Inter({ subsets: ['latin'] })
const dinnFont = localFont({ src: '../fonts/DINNeuzeitGrotesk.ttf', weight:'400', variable: '--font-dinn' })
const futuraLightFont = localFont({ src: '../fonts/Futura-Lt-Light.ttf', weight:'300', variable: '--font-futura-lt' })
//const futuraBookFont = localFont({ src: '../fonts/Futura-Lt-Book.ttf', weight:'400', variable: '--font-futura-book' })

export const metadata: Metadata = {
  title: 'NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${futuraLightFont.variable} ${dinnFont.variable}`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
