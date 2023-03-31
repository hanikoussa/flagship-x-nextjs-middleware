import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { isBrowser } from 'next/dynamic';
import { useEffect, useState } from 'react';


import Link from 'next/link'
import { FlagshipProvider } from "@flagship.io/react-sdk";



const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  
  return (

    <>
      <FlagshipProvider
        envId= {process.env.NEXT_PUBLIC_FLAGSHIP_ENVID}
        apiKey={process.env.NEXT_PUBLIC_FLAGSHIP_APIKEY}
        visitorData={{
          id: "hani",
          context: {
            key: "value"
          },
          isAuthenticated: false
        }}
      >
        <h1>home page - Hello</h1>
        <Link href='/users'>User  </Link>
        <Link href='/posts'>Posts  </Link>
        <Link href='/product'>Product  </Link>
      </FlagshipProvider>

    </>
  )
}





