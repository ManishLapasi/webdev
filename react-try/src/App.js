import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  let expenses = [
    {
      id: "i1",
      date: new Date(2022,15,3),
      place: "home",
      amount: 25
    },
    {
      id: "i2",
      date: new Date(2022,12,3),
      place: "school",
      amount: 67
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses values={expenses}></Expenses>
    </div>
  );
}

export default App;
