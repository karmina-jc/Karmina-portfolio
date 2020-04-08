import React from 'react';
import MenubarDesktop from './components/MenubarDesktop'
import Footer from './components/footer';
import Profile from './components/Profile';
import Projects from './components/Proyects';
<<<<<<< HEAD
import styled from 'styled-components';
=======

>>>>>>> 80e561fdf1f87b7166093a7754842bb74bbcc971


const Styles = styled.div`
    .App{
        background-color: #600269;
    }
`

function App() {
  return ( 
    <Styles>
      <div className="App">
        <MenubarDesktop />               
          <Profile /> 
          <Projects />         
        <Footer/>
      </div>
    </Styles>
  );
}

export default App;
