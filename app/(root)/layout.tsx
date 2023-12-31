import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import BottomBar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import TopBar from '@/components/shared/TopBar'
import RightSidebar from '@/components/shared/RightSidebar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Communities',
  description: 'A Next.JS Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <main>
          <LeftSidebar />
          <section className='main-container'>
            <div className='w-full max-w-4xl'>
              {children}
            </div>
          </section>
        </main>
        <RightSidebar />
        <BottomBar />
        </body>
    </html>
    </ClerkProvider>
  )
}
