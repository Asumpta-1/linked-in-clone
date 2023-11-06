import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* app body */}
      <div className="app__body">
        {/* sidebar*/}
        <SideBar />
        {/* feed */}
        {/* widget */}
      </div>
    </div>
  );
}

export default App;
