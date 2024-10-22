import React, { useState } from "react";
import "./App.css";
import { Form } from "./Form";

function App() {
  return (
    <div className="app">
      <Form result={result} calculateResult={calculateResult} />
    </div>
  );
}
export default App;
