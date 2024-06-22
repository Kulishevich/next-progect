import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function notFound() {
  return (
    <div>
        <Head>
            <title>not found</title>
        </Head>
        <Image src='/404.jpg' alt='' width={500 } height={350}/>
    </div>
  )
}
