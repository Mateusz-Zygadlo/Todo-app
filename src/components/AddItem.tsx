import { useState } from 'react';

interface TaskProps{
  newTask: (props: any) => void;
}

const AddItem: React.FC<TaskProps> = ({ newTask }) => {
  const [value, setValue] = useState<string>('');

  const changeValue = (e: any) => setValue(e.target.value); 
  
  const submitForm = (e: any) => {
    e.preventDefault();

    if(value.length){
      newTask({
        value,
        checked: false,
        id: Math.random() * 1000
      })

      setValue('');
    }
  }

  return(
    <form className="mt-10" onSubmit={(e)=>{submitForm(e)}}>
      <h1 className="text-4xl flex justify-center">Add item</h1>
      <div className="flex justify-center mt-4">
        <input type="text" name="task" onChange={changeValue} value={value} placeholder="Enter item" className="w-60 border-b-2 border-black outline-none focus:border-blue-300 transition-colors" />
        <button type="submit" className="ml-2 border-2 border-transparent px-1 hover:border-gray-300 focus:border-blue-300 transition-colors">Submit</button>
      </div>
    </form>
  )
}

export default AddItem;