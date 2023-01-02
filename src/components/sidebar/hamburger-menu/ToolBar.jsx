import React from 'react'
import styles from '../hamburger-menu/ToolBar.module.css'

export function ToolBar({openSidebar, menu}) {

    return (
        <div className={styles.burger} onClick={()=>openSidebar()}>
            <div>
                <span className={`${styles.span1} ${menu ? styles.sample1 : styles.span1}`}></span>
                <span className={`${styles.span2} ${menu ? styles.sample2 : styles.span2}`}></span>
                <span className={`${styles.span3} ${menu ? styles.sample3 : styles.span3}`}></span>
            </div>
        </div>
  )
}

