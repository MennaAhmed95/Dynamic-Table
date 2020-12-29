import "./App.css";
import Input from "./components/InputField";
import MyTable from "./components/Table";
import React, { useState } from "react";

function App() {
  const [row, setRow] = useState("");
  const [col, setCol] = useState("");
  let [flag, setFlag] = useState(false);
  const handleChange = (e) => {
    e.target.name === "r" ? setRow(e.target.value) : setCol(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    flag = true;
    setFlag(flag);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="containerInputs">
        <Input value={row} handleChange={handleChange} label="Rows" name="r" />
        <Input
          value={col}
          handleChange={handleChange}
          label="Columns"
          name="c"
        />
        <input type="submit" value="Enter" className="enter" />
      </form>
      {flag && <MyTable row={row || 0} col={col || 0} />}
    </div>
  );
}

export default App;
