import "./App.css";
import { getListItems } from "../../utils";

const listItems = getListItems();
console.log(listItems);

const App = () => {
  return <div className="App">Learn React</div>;
};

export default App;
