// import { useState } from "react";
import Portfolio from '../Portfolio';

// Selected page is destructured from props
function Main({ selectedPage }) {
  const display = () => {
    switch (selectedPage.title) {
      case "about me":
        return <h1>about</h1>; // about component here
      case "portfolio":
        return (
          <>
            {/* <h1>projects</h1> */}
            <Portfolio /> 
          </>
        ); // projects component here
      case "contact":
        return <h1>contact</h1>; // about component here
      case "resume":
        return <h1>resume</h1>; // projects component here
      default:
        return <h1>about</h1>;
    }
  };

  return <div>{display()}</div>;
}

export default Main;
