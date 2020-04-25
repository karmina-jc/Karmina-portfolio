import React from "react";
import MenubarDesktop from "./components/MenubarDesktop";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import styled from "styled-components";
import Tools from "./components/Tools";

const Styles = styled.div`
    .App{
      background-color: #F9F3ED;
      display: flex:
    }
`;

function App() {
  return (
    <Styles>  
        <div className="App">
          <MenubarDesktop />
            <Profile /> 
            <Projects />
            <Tools />
            <Footer />          
        </div>
    </Styles>
  );
}

export default App;

