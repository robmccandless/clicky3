import React from "react";
import {Home} from "./pages/Home";
import {About} from "./pages/About";

function App() {
  return (
    <div className="App">
      Hello From the App Module
      <Home name="Robert" city="Boulder" />
      <About />
    </div>
  );
}

export default App;
