import { Inter } from '@next/font/google'
import styles from '../main/MainContent.module.css';

const inter = Inter({ subsets: ['latin'] })

export function MainContent() {
  return (
    <>
      <div className={styles.MainContent}>
        <img src="/images/background/church.jpg" alt="church" className={styles.church}/>
      </div>

    </>
  )
}
