import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from './components/NavBar/Navbar'; 
import { Menu } from './components/Menu/Menu'; 
import { GlobalStyle } from './components/Style/GlobalStyle'; 
import {ModalItem} from './components/Modal/ModalItem';
import { Order } from './components/Order/Order';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';
import { useAuth } from './components/Hooks/useAuth'


const firebaseConfig = {
  apiKey: "AIzaSyB3IJeiL-ef-xluHOyvr0YL0-FAznbyVuU",
  authDomain: "mrdonald-36f5d.firebaseapp.com",
  databaseURL: "https://mrdonald-36f5d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonald-36f5d",
  storageBucket: "mrdonald-36f5d.appspot.com",
  messagingSenderId: "974530047061",
  appId: "1:974530047061:web:b09280df23b963865238dc"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
    
  );
}

export default App;
