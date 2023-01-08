import Image from 'next/image'
import React from 'react'
import { InformationData } from './InformationData'
import styles from '../information/Information.module.css'
import Link from 'next/link'

export function InformationFunction({Data}) {
  const handleClick=(() => {
    alert('clicked')
  
  });
  
  return (
    <div className={styles.parents}>
      {InformationData.map((Data) =>{
        return(
          <div className={styles.master} key={Data.image}>
            <div className={styles.children}>
              <Image src={Data.image} width={400} height={200} alt='InformationImage' className={styles.image} onClick={handleClick}></Image>
            </div>

            <div className={styles.contents}>
              <h2 className={styles.h2}>{Data.title}</h2>
              <p className={styles.p}>{Data.description}</p>
            </div>
          </div>
        )

      })}
        
    </div>
  )
}



