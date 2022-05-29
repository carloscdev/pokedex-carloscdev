import { ReactNode } from 'react'
import { Footer } from '../components'

interface Props {
  children: ReactNode
}

export const DefaultLayout = ({children}: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <main className="overflow-y-auto overflow-x-hidden shadow-custom w-[420px] max-w-[95vw] h-[98vh] md:h-[80vh] bg-white rounded-[30px] px-4 py-10">
        <div className="relative z-50">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  )
}
