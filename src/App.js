import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/todos")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div className="App"></div>;
}

export default App;
