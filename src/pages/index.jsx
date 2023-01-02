import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MainContent } from '../components/main/MainContent'
import { HamburgerMenu } from '../components/sidebar/hamburger-menu/HamburgerMenu'


export default function Home() {
  return (
    <>
      <Head>
        <title>My Portifolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main_css}>
        <MainContent/>
        <HamburgerMenu/>

      </main>
    </>
  )
}
