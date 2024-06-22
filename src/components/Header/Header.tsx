'use client'
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()
    // console.log(pathname)

  return (
    <header className={styles.header}>
        <Link href='/' className={pathname === '/' ? styles.active : ''}>Home </Link>
        <Link href='/about' className={pathname === '/about' ? styles.active : ''}>About </Link>
    </header>
  )
}
