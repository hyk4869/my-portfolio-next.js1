import styles from '../main/MainContent.module.css';

export function MainContent() {

  return (
    <>
      <div className={styles.MainContent}>
        <img src="/images/background/church.jpg" alt="church" 
        className={styles.church}/>
      </div>

    </>
  )
}

// {`${styles.church} ${ ? styles.church1 : styles.church}`}
// className={`${styles.menu} ${menu ? styles.menu1 : styles.menu}`}