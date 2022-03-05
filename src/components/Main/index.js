import Portfolio from '../Portfolio';
import About from '../About';
import Contact from '../Contact';
import Resume from '../Resume';

function Main({ selectedPage }) {
  const display = () => {
    switch (selectedPage.title) {
      case "about me":
        return <About />; 
      case "portfolio":
        return (
            <Portfolio /> 
        ); 
      case "contact":
        return <Contact />; 
      case "resume":
        return <Resume />;
      default:
        return <h1>about</h1>;
    }
  };

  return <div  className="container-fluid">{display()}</div>;
}

export default Main;
