import { Ballet, Inter } from '@next/font/google'
import { useState } from 'react';
import { BackDrop } from './BackDrop';
import { HamburgerData } from './HamburgerData';
import { ToolBar } from './ToolBar';

const inter = Inter({ subsets: ['latin'] })


export function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleSidebar = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <>
      <ToolBar menu ={openMenu} openSidebar ={toggleSidebar} />
      <BackDrop menu ={openMenu} closeMenu ={toggleSidebar}/>
      <HamburgerData menu ={openMenu}/>
    </>
  )
}
