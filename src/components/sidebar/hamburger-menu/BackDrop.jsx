import React from 'react'
import styles from '../hamburger-menu/HamburgerData.module.css'


export function BackDrop({menu,closeMenu}) {
  return (
    <div className={`${styles.backdrop} ${menu ? styles.backdrop1 : styles.backdrop}`} onClick={closeMenu}></div>

  )
}

