import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const DetailLayout = ({children}: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-600">
      <main className="overflow-y-auto overflow-x-hidden shadow-custom w-[420px] max-w-[95vw] h-[98vh] md:h-[80vh] bg-white rounded-[30px]">
        <div className="relative z-50">
          {children}
        </div>
      </main>
    </div>
  )
}
