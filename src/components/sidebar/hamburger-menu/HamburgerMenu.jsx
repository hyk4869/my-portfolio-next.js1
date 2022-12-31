import { Ballet, Inter } from '@next/font/google'
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
  const [open, setOpen] = useState(false);
  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  };
  
  return (
    <>

    </>
  )
}
