import { useState } from 'react';

interface itemProps{
  value: string;
  checked: boolean;
}

const Item: React.FC<itemProps> = ({value, checked}) => {
  const [isChecked, setChecked] = useState<boolean>(checked);

  const toggleChecked = (): void => setChecked(!isChecked);

  const editTask = (): void => {
    console.log('edit task');
  }
  const deleteTask = (): void => {
    console.log('delete tasks');
  }

  return(
    <div className="flex justify-between border-2 border-black hover:border-gray-200 transition-colors px-5 py-2 my-2">
      <h1 className="text-xl">{value}</h1>
      <div className="ml-5 flex">
        <button onClick={editTask} className="flex justify-center items-center hover:text-gray-300">
          <span className="material-icons" title="edit">edit</span>
        </button>
        <button onClick={deleteTask} className="flex justify-center items-center hover:text-gray-300">
          <span className="material-icons" title="delete">delete</span>
        </button>
        <button onClick={toggleChecked} className="flex justify-center items-center hover:text-gray-300">
          <span className="material-icons" title={isChecked ? "done" : "not done"}>{isChecked ? 'done' : 'remove_done'}</span>
        </button>
      </div>
    </div>
  )
}

export default Item;