import { Inter } from '@next/font/google'
import classNames from 'classnames'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

interface GlobalLayoutProps {
  children: React.ReactNode
  className?: string
}

const GlobalLayout = ({ children, className }: GlobalLayoutProps) => (
  <div className={classNames(`${inter.variable} font-sans`, className)}>
    {children}
  </div>
)

export default GlobalLayout
