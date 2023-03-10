import { Ballet, Inter } from '@next/font/google'
import Link from 'next/link';
import styles from '../sidebar/Sidebar.module.css';

const inter = Inter({ subsets: ['latin'] })

const ITEM =[{ href: "/", icons: '/images/menu-icons/home.png', title: "Home"},
{ href: "/skill", icons: '/images/menu-icons/programming.png', title: "Skill"},
{ href: "/information", icons: '/images/menu-icons/information.png', title: "Information"},
{ href: "/about", icons: '/images/menu-icons/user.png', title: "About"},
{ href: "/faq", icons: '/images/menu-icons/faq.png', title: "FAQ"},
{ href: "/contact", icons: '/images/menu-icons/mail.png', title: "Contact"}
]


export function Sidebar() {
  return (
    <>
      <div className={styles.menu}>
        {ITEM.map(item =>{
          return(
            <ul key={item.href}  className={styles.ul}>
              <li className={styles.li}>
                  <Link href={item.href} className={styles.a}>
                    <img src={item.icons} className={styles.icon}/>
                    {item.title}
                  </Link>
              </li>
            </ul>
          )
        })}
      </div>
    </>
  )
}

// target="_blank" rel="noopener noreferrer"