// import { useState } from "react";
import Portfolio from '../Portfolio';
import About from '../About';

// Selected page is destructured from props
function Main({ selectedPage }) {
  const display = () => {
    switch (selectedPage.title) {
      case "about me":
        return <About />; 
      case "portfolio":
        return (
          <>
            <Portfolio /> 
          </>
        ); 
      case "contact":
        return <h1>contact</h1>; 
      case "resume":
        return <h1>resume</h1>;
      default:
        return <h1>about</h1>;
    }
  };

  return <div>{display()}</div>;
}

export default Main;
