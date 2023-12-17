import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ParticleBg from '@/components/particleBG/particleBG'
import Nav from '@/components/nav/nav'
import styles from "./layout.module.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TotalTaxAmount',
  description: 'TotalTaxAmounts personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.background}>
            <ParticleBg className={styles.particles}/>
            <div className={styles.container}>
              <Nav />
              {children}
            </div>
          </main>
        </body>
    </html>
  )
}
