import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { isBrowser } from 'next/dynamic';
import { useEffect, useState } from 'react';


import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

  return (
    <><h1>home page - Hello</h1>
      <Link href='/users'>User  </Link>
      <Link href='/posts'>Posts  </Link>
      <Link href='/product'>Product </Link>
    </>
  )
}





