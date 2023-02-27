import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { isBrowser } from 'next/dynamic';
import { useEffect, useState } from 'react';

import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  const [vl, setVl] = useState()
  useEffect(()=> {
    async function fetchHeader(){
      const response = await fetch ('http://localhost:3000')
      const headerValue = response.headers.get('X-Flag-Header')
      console.log("the value is ",headerValue);
      setVl(headerValue)
    }
    fetchHeader();
  },[])

  return (
    <><h1>home page - Hello {data.name}</h1>
      <Link href='/users'>User  </Link>
      <Link href='/posts'>Posts  </Link>
      <Link href='/news'>News  </Link>
    </>
  )
}

export async function getStaticProps(data) {
    const res = await fetch('http://localhost:3000/api/hello')
    // let headerValue = response.headers.get('X-Flag-Header')
    // console.log(headerValue)
    data = await res.json()  
    return {
      props: {
        data
      }
    }
  }




