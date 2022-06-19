import logo from "./logo.svg";
import "./App.css";
import ListComponent from "./List";
import data from "./data";
import { useState } from "react";

function App() {
const [person, setPerson] = useState(data)

  return (
    <div className="main">
      <div className="birthday-div">
        <div>
          <h1>{person.length} birthday today</h1>
        </div>

        <div>
          <ListComponent person= {person}/>
        </div>

        <button onClick={()=> {setPerson([])}}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
