import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  console.log(data);
  const cards = data.map((item) => <Card {...item} />);
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
