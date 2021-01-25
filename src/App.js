import React, { useState } from 'react';
import { NavBar } from './components/Navbar'; 
import { Menu } from './components/Menu'; 
import { GlobalStyle } from './components/GlobalStyle'; 
import {ModalItem} from './components/ModalItem';
import { Order } from './components/Order';

function App() {

  const [openItem, setOpenItem] = useState(null);

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
    
  );
}

export default App;
