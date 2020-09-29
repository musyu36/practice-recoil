import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../atoms/text";
import "./styles.css";
import TodoAppBar from "./TodoAppBar";

const App = () => {
  return (
    <div className="App">
      <TodoAppBar />
    </div>
  );
};

export default App;
