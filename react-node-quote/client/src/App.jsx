import React from "react";
import ReactDOM from "react-dom";
import TheNavbar from "./components/TheNavbar";
import Quote from "./components/Quote";

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <TheNavbar />
      <main className=" m-10 space-y-10">
        <Quote quote="Ellaame maarum" author="Banner" />
        <Quote quote="Ellaame maarum 1" author="Banner 1" />
      </main>
    </div>
  );
};

export default App;
