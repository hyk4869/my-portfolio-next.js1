import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { MainContent } from '../components/main/MainContent'
import { HamburgerMenu } from '../components/sidebar/hamburger-menu/HamburgerMenu'
import { Form } from '../components/form-mail/Form'


export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main_css}>
        {/* <MainContent/> */}
        <HamburgerMenu/>
        <Form/>

      </main>
    </>
  )
}
