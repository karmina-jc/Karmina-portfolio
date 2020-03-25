import React, { Fragment } from 'react';
import MenubarDesktop from './components/MenubarDesktop'
import Footer from './components/footer';
import Profile from './components/Profile';


function App() {
  return (  
      <Fragment className="App">
        <MenubarDesktop />               
          <Profile />          
        <Footer/>
      </Fragment>

  );
}

export default App;
