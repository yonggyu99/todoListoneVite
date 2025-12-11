import "./App.css";
import Header from "./components/header";
import Editor from "./components/editor";
import List from "./components/List";
import { useState } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React Study",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "React Study1",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "React Study2",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
