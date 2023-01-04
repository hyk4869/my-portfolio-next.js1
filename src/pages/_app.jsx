import { HamburgerMenu } from '../components/sidebar/hamburger-menu/HamburgerMenu';
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <div>
      <HamburgerMenu/>
      <Component {...pageProps} />
    </div>
  );
}
