import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
import { Footer, NavbarComponent,Preface } from '@components'


const Home = () => {
  return (
    <Fragment>
        <Head>
            <title>Hyge</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.PNG" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins|Monteserrat"></link>
        </Head>
        <main style={{overflowX:'hidden'}}>
            <NavbarComponent />
            <Preface />
            <Footer />
        </main>
    </Fragment>
  )
}

export default Home