import AddItem from "./components/AddItem";
import Item from "./components/Item";

const App = () => {
  return(
    <div>
      <AddItem />
      <div className="flex justify-center items-center flex-col mt-10">
        <Item
          value="test"
          checked={true} />
      </div>
    </div>
  );
}

export default App;