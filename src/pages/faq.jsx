import Head from "next/head";
import { Accordion } from "../components/accordion/Accordion";
import styles from '../styles/Home.module.css'



export default function faq() {
    return (
      <>
        <Head>
          <title>FAQ</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main_css}>
          <Accordion/>

  
        </main>
      </>
    )
  }