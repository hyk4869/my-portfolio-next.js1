import React from 'react'
import styles from '../darkbutton/Button.module.css'

export function Button() {
  return (
    <>
      <div className={styles.checkbtnParents}>
        <input type='checkbox' id='checkbox' name='checkbox'/>
        <label htmlFor='checkbox'>チェック</label>
      </div>
    </>
  )
}

