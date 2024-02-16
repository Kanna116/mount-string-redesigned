import React from 'react'
import HomePage from './home'
import Head from 'next/head'

const Home = () => {
  return (
    <>
    <Head>
      <title>Mount Strings</title>
      <link href="https://api.fontshare.com/v2/css?f[]=montserrat@500,1,900,700,701,801,200,401,301,400,601,100,101,2,201,800,300,600,901,501&display=swap" rel="stylesheet"></link>
    </Head>

    <HomePage />

    </>
  )
}

export default Home