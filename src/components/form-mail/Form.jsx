import { Inter } from '@next/font/google'
import styles from '../form-mail/Form.module.css';


const inter = Inter({ subsets: ['latin'] })

export function Form() {

  return (
    <>
        <div className={styles.formContainer}>
            <form action="">
                <h1>Contact Form</h1>
                <hr/>


                <div className={styles.formbtn}>
                    <button type="submit" className={styles.btn}>
                        Submit
                    </button> 
                </div>
            </form>
        </div>

    </>
  )
}

// {`${styles.church} ${ ? styles.church1 : styles.church}`}
// className={`${styles.menu} ${menu ? styles.menu1 : styles.menu}`}