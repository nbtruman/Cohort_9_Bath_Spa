import './App.css';
import Box from "./components/box/box.js";
import React, {useState} from "react";
import Button from "./components/button/button";
import Form from "./components/form/form";

function App() {
  const [Color, setColor] = useState("white");
  
  function change() {
    setColor(`RGB(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
  }

  return (
    <div className="App">
      <Box bgColor={Color}>
        <h1>Here is a box</h1>
        <Button handleChange={change}
                bgColor={Color}/>
      </Box>
      <Form />
    </div>
  );
}

export default App;
