import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react'
import Head from 'next/head'

export default function About(props) {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main_css} ${props.dark ? styles.main_css2 : styles.main_css}`}>


      </main>
    </>
  )
}

