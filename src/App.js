import React, { Fragment } from 'react';
import MenubarDesktop from './components/MenubarDesktop'
import Footer from './components/footer';
import Profile from './components/Profile';
import Projects from './components/Proyects';



function App() {
  return (  
      <Fragment className="App">
        <MenubarDesktop />               
          <Profile /> 
          <Projects />         
        <Footer/>
      </Fragment>

  );
}

export default App;
