import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './components/NavBar/Navbar'; 
import { Menu } from './components/Menu/Menu'; 
import { GlobalStyle } from './components/Style/GlobalStyle'; 
import { ModalItem } from './components/Modal/ModalItem';
import { Order } from './components/Order/Order';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';
import { useAuth } from './components/Hooks/useAuth';
import { useTitle } from './components/Hooks/useTitle';
import { useDB } from './components/Hooks/useDB';
import { OrderConfirm } from './components/Order/OrderConfirm';
import { useOrderConfirm } from './components/Hooks/useOrderConfirm';
import { Context } from './components/Functions/context'


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
  const database = firebase.database();
  const dbMenu = useDB(database);
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{ auth, openItem, orders, orderConfirm, dbMenu, database }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu />
      {openItem.openItem && <ModalItem />}
      { orderConfirm.openOrderConfirm && <OrderConfirm /> }
    </Context.Provider>
    
  );
}

export default App;
