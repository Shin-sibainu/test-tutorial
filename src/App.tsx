import React from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Counter from "./components/counter/counter";
import { Users } from "./components/users/Users";
// https://github.com/gopinav/React-Testing-Tutorial

function App() {
  return (
    <div className="App">
      <Contact />
      <Counter />
      <Users />
    </div>
  );
}

export default App;
