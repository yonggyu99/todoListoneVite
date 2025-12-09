import "./App.css";
import Header from "./components/header";
import Editor from "./components/editor";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
