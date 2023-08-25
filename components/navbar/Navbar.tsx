import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '@/components'

const navItems = [
  { path: '/pricing', text: 'Pricing' },
  { path: '/about', text: 'About' },
  { path: '/contact', text: 'Contact' },
]

export function Navbar() {
  return (
    <nav className="m-2 p-2 flex justify-between rounded bg-blue-800 bg-opacity-30">
      <Link href="/" className="flex items-center gap-2">
        <HomeIcon />
        <span>Home</span>
      </Link>
      <ul className="flex gap-2">
        {navItems.map(({ path, text }) => (
          <ActiveLink key={path} path={path} text={text} />
        ))}
      </ul>
    </nav>
  )
}
