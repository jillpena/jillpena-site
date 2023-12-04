import React, { FC, ReactNode } from 'react'
import Navigation from './navigation' // Import your Navigation component

interface LayoutProps {
  pageTitle: string
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <header className='p-4 col-span-2'>
        <div className='grid grid-cols-2'>
          <div>Left Header</div>
          <div>Right Header</div>
        </div>
      </header>
      <Navigation />
      <main className='p-4 col-span-2'>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer className='p-4 col-span-2'>
        <div className='grid grid-cols-2'>
          <div>Left Footer</div>
          <div>Right Footer</div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
