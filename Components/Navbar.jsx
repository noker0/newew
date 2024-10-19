import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const navigation = [
  {id:1, title: 'Home', href: '/'},
  {id:2, title: 'About', href: '/About'},
  {id:3, title: 'Contacts', href: '/Contacts'},
]

const Navbar = () => {
  return (
    <>
        <nav className={styles.navbar}>
          {navigation.map(({id,title,href}) =>{
            return (
              <Link key={id} href={href} className={styles.a} >
                {title}
              </Link>
            )
          })}
        </nav>
    </>
  )
}

export default Navbar