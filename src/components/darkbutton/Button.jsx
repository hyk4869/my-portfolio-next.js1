import React, { useEffect, useState } from 'react'
import styles from '../darkbutton/Button.module.css'

export function Button() {
  const[dark,setDark] = useState(false);
  
  /*const handleClick = (e) =>{
    if (e.target.checked === true){
      return console.log("クリックされました")
    }else{
      return console.log("外れました")
    }
  }

  const handleClick = (e) =>{
    (e.target.checked === true)? console.log("クリック"):console.log("外れました")
  } */

  const handleClick = (e) =>{
    setDark((dark) => !dark);
    `${(e.target.checked === true)? console.log("クリック") : console.log("外れました")}`
  }

  return (
    <>
      <div className={`${styles.checkbtnParents} ${dark ? styles.checkbtnParents2 : styles.checkbtnParents}`}
        //className={styles.checkbtnParents} 
        onChange={handleClick}>
        <input type='checkbox' id='checkbox' name='checkbox' className={styles.input}/>
        <label htmlFor='checkbox' className={styles.label}>チェック</label>
      </div> 
    </>
  )
}

{/* <div className={`${styles.main_css} ${dark ? styles.main_css2 : styles.main_css}`} onChange={handleClick}></div> */}


