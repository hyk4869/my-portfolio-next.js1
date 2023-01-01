import React from 'react'
import styles from '../hamburger-menu/HamburgerData.module.css'

const ITEM =[{ href: "/", icons: '/images/menu-icons/home.png', title: "Home"},
{ href: "/skill", icons: '/images/menu-icons/programming.png', title: "Skill"},
{ href: "/information", icons: '/images/menu-icons/information.png', title: "Information"},
{ href: "/about", icons: '/images/menu-icons/user.png', title: "About"},
{ href: "/faq", icons: '/images/menu-icons/faq.png', title: "FAQ"},
{ href: "/contact", icons: '/images/menu-icons/mail.png', title: "Contact"}
]

export function HamburgerData({menu}) {
  return (
    <>
      <div className={`${styles.menu} ${menu ? styles.menu1 : styles.menu}`}>
        {ITEM.map(item =>{
          return(
            <ul key={item.href}  className={styles.ul}>
              <li className={styles.li}>
                  <a href={item.href} className={styles.a} target="_blank" rel="noopener noreferrer">
                    <img src={item.icons} className={styles.icon}/>
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
