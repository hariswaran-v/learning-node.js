import React from "react";
import ReactDOM from "react-dom";
import TheNavbar from "./components/TheNavbar";
import Quote from "./components/Quote";

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <TheNavbar />
      <main className="bg-white rounded p-10 shadow m-10">
        <Quote /> 
      </main>
    </div>
  );
};

export default App;
