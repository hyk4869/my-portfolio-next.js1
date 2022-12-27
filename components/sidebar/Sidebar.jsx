// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const ITEM =[{ href: "/", img: "", title: "Home"},
{ href: "/about", img: "", title: "About"},
{ href: "/contact", img: "", title: "Contact"},
{ href: "/skill", img: "", title: "Skill"},
{ href: "/information", img: "", title: "Information"},]


export function Sidebar() {
  return (
    <>
      <div className={styles.menu}>
        {ITEM.map(item =>{
          return(

            <ul key={item.href}  className={styles.ul}>
              <li className={styles.li}>
                <a href={item.href} className={styles.a} 
                  target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            </ul>

          )
        })}
  
      </div>
    </>
  )
}
