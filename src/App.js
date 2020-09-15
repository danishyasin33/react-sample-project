import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import useImage from "./useImage";

function ImgComp() {
  const { src } = useImage({
    pixlSrc: "http://robor.libpx.com/images/intelli_ques.jpg",
  });
  return <img src={src} />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Suspense fallback="<div>loading...</div>">
          <ImgComp />
        </Suspense>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
