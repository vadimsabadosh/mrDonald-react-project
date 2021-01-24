import React from 'react';
import { NavBar } from './components/Navbar'; 
import { Menu } from './components/Menu'; 
import { GlobalStyle } from './components/GlobalStyle'; 


function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu/>
    </>
    
  );
}

export default App;
