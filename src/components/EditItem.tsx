import { useState, useEffect } from 'react';

interface AppArr{
  appData: any,
  id: number,
  editTaskFunc: (props: any) => any,
  closeEditPopup: () => void,
}

const EditItem: React.FC<AppArr> = ({ appData, id, editTaskFunc, closeEditPopup }) => {
  const [inputValue, setInputValue] = useState<string>('');
  
  const changeValue = (e: any) => setInputValue(e.target.value);

  const submitForm = (e: any) => {
    e.preventDefault();
    
    if(inputValue.length){   
      const editTask = appData.filter((task: any) => task.id == id);
      editTask[0].value = inputValue;
      const modifyTask = appData.map((task: any) => task.id == id ? editTask[0] : task);

      editTaskFunc(modifyTask);
      closeEditPopup();
    }
  }

  useEffect(() => {
    const findTask = appData.filter((item: any) => item.id == id);

    if(findTask){
      setInputValue(findTask[0].value);
    }
  }, [])
  
  return(
    <div className="w-screen h-screen backdrop-filter backdrop-blur-lg z-10 fixed top-0 left-0">
      <form className="mt-10 z-20" onSubmit={submitForm}>
        <h1 className="text-4xl flex justify-center">Edit item</h1>
        <div className="flex justify-center mt-4">
          <input type="text" name="task" onChange={changeValue} value={inputValue} placeholder="Enter item" className="w-60 border-b-2 border-black outline-none focus:border-blue-300 transition-colors" />
          <button type="submit" className="ml-2 border-2 border-transparent px-1 hover:border-gray-300 focus:border-blue-300 transition-colors">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EditItem;