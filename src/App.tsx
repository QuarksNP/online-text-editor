import React from "react";

import { Header } from "./components/header/Header";
import { EditorHeader } from "./components/editor-header/EditorHeader";

import { mainStyle } from "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className={mainStyle}>
        <EditorHeader />
        <div contentEditable="true"></div>
      </main>
    </React.Fragment>
  );
}

export default App;
