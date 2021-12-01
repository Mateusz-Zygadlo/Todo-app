import { useState } from 'react';
import AddItem from "./components/AddItem";
import Item from "./components/Item";
import EditItem from "./components/EditItem";

interface Task{
  value: string,
  checked: boolean,
  id: number,
}

const App = () => {
  const [isEditItem, setIsEditItem] = useState<boolean>(false);
  const [actualId, setActualId] = useState<number>(0);
  const [appData, setAppData] = useState<any>([])

  const newTask = (task: Task) => {
    setAppData([...appData, task]);
  }
  const editTaskFunc = (props: any) => {
    setAppData(props);
  }

  const closeEditPopup = () => {
    setIsEditItem(false);
  }
  
  const editTask = (id: number): void => {
    setActualId(id);
    setIsEditItem(true);
  }
  const deleteTask = (id: number): void => {
    const findTask = appData.filter((task: Task) => task.id != id);
    setAppData(findTask);
  }

  const setCheckedFunc = (id: number) => {
    const taskIndex = appData.find((task: Task) => task.id == id);
    taskIndex.checked = !taskIndex.checked;
    const modifiedAppData = appData.map((task: Task) => task.id == id ? taskIndex : task);

    setAppData(modifiedAppData);
  }

  return(
    <div>
      <AddItem
        newTask={newTask} />
      <div className="flex justify-center items-center flex-col mt-10">
        {appData.map((task: Task, index: number) => (
          <Item 
            key={index}
            value={task.value} 
            checked={task.checked} 
            id={task.id}
            editTask={editTask}
            deleteTask={deleteTask}
            setCheckedFunc={setCheckedFunc} />
        ))}
      </div>
      <div>
        {isEditItem ?
          <EditItem
            appData={appData}
            id={actualId}
            editTaskFunc={editTaskFunc}
            closeEditPopup={closeEditPopup} />
        :
          null
        }
      </div>
    </div>
  );
}

export default App;