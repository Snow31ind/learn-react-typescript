import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Quang",
    last: "Tien",
  };

  const personNames = [
    {
      first: "Van",
      last: "Hung",
    },
    {
      first: "Nguyet",
      last: "Anh",
    },
    {
      first: "Kien",
      last: "An",
    },
  ];

  return (
    <div className="App">
      <Greet name="Quang Tien" count={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personNames} />
    </div>
  );
}

export default App;
