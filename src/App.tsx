import React from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Counter from "./components/counter/counter";
// https://github.com/gopinav/React-Testing-Tutorial

function App() {
  return (
    <div className="App">
      <Contact />
      <Counter />
    </div>
  );
}

export default App;
