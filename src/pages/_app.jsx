import { HamburgerMenu } from '../components/sidebar/hamburger-menu/HamburgerMenu';
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  const[dark,setDark] = useState(false);
  const handleClick = (e) =>{
    setDark((dark) => !dark);
    `${(e.target.checked === true)? console.log("クリック") : console.log("外れました")}`
  }

  return (
    <div>
        <div className={styles.checkbtn} onChange={handleClick}>
          <input type='checkbox' id='checkbox' className={styles.input}/>
          <label htmlFor='checkbox' className={styles.label}>DarkMode on / of</label>

        </div>
      <HamburgerMenu/>
      <Component {...pageProps} dark={dark} setDark={setDark} handleClick={handleClick}/>
    </div>
  );
}
