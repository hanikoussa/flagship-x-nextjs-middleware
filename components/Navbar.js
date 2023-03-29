import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
 
const Navbar = () => {
    return (
        <nav className={styles.mainnav}>
            <ul>
                <Link href='/'><li>Home</li></Link>
                <Link href='/users'><li>Users</li></Link>
                <Link href='/posts'><li>Posts</li></Link>
            </ul>
        </nav>
    )
}
 
export default Navbar