import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { ContactForm } from '../components/form-mail/ContactForm'


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
        <ContactForm/>

      </main>
    </>
  )
}
