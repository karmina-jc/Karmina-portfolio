import React from 'react';
import MenubarDesktop from './components/MenubarDesktop'
import Footer from './components/footer';
import Profile from './components/Profile';
import Projects from './components/Proyects';
import styled from 'styled-components';


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
