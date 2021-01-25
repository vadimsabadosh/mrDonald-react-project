import React from 'react';
import { NavBar } from './components/NavBar/Navbar'; 
import { Menu } from './components/Menu/Menu'; 
import { GlobalStyle } from './components/Style/GlobalStyle'; 
import {ModalItem} from './components/Modal/ModalItem';
import { Order } from './components/Order/Order';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';

function App() {

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
    
  );
}

export default App;
