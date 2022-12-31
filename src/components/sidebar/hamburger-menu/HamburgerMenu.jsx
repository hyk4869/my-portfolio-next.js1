import { Ballet, Inter } from '@next/font/google'
import { useState } from 'react';
import styles from '../hamburger-menu/HamburgerMenu.module.css';

const inter = Inter({ subsets: ['latin'] })

const ITEM =[{ href: "/", icons: '/images/menu-icons/home.png', title: "Home"},
{ href: "/skill", icons: '/images/menu-icons/programming.png', title: "Skill"},
{ href: "/information", icons: '/images/menu-icons/information.png', title: "Information"},
{ href: "/about", icons: '/images/menu-icons/user.png', title: "About"},
{ href: "/faq", icons: '/images/menu-icons/faq.png', title: "FAQ"},
{ href: "/contact", icons: '/images/menu-icons/mail.png', title: "Contact"}
]


export function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    // setOpenMenu((prevState) => !prevState);
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header id="header" className={styles.header}>

        <div className={styles.menu}>
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

        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>

      </header>
          



      <div className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}>
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          {/* <div className={styles.menu}>
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

          </div> */}
        </ul>
      </div>
    </>
  )
}
