import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [options] = useState([
    {
      title: "about me",
    },
    {
      title: "portfolio",
    },
    {
      title: "contact",
    },
    {
      title: "resume",
    },
  ]);

  const [selectedPage, setSelectedPage] = useState(options[0]);

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
        <Header />
        <Navigation
          options={options}
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
        />
        <Main selectedPage={selectedPage} />
        <Footer />
    </div>
  );
}

export default App;
