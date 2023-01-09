import { HamburgerMenu } from '../components/sidebar/hamburger-menu/HamburgerMenu';
import '../styles/globals.css'
import styles from '../styles/Home.module.css'


export default function App({ Component, pageProps }) {

  return (
    <div>
      <HamburgerMenu/>
      <Component {...pageProps} />
    </div>
  );
}
