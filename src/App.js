import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Julia Olson";
  });

  const [categories] = useState([
    { name: "About", description: "Info section about Julia" },
    { name: "Projects", description: "Completed projects to display" },
    { name: "Contact", description: "Contact info" },
    // { name: "Resume", description: "resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <About currentCategory={currentCategory}></About>
        <Contact currentCategory={currentCategory}></Contact>
      </main>
      <Footer />
    </div>
  );
}

export default App;
