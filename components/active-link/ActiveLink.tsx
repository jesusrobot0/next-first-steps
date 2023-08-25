'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './active-link.module.css'

interface Props {
  path: string
  text: string
}

export function ActiveLink({ path, text }: Props) {
  const currentPath = usePathname()
  const ActiveLinkClassNames = currentPath === path
    ? `${styles.link} ${styles['active-link']}`
    : `${styles.link}`

  return (
    <li >
      <Link
        href={path}
        className={ActiveLinkClassNames}
      >
        {text}
        { }
      </Link>
    </li>
  )
}
