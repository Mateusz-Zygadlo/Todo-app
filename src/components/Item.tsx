interface itemProps{
  value: string,
  checked: boolean,
  id: number,
  editTask: (id: number) => void,
  deleteTask: (id: number) => void,
  setCheckedFunc: (id: number) => void,
}

const Item: React.FC<itemProps> = ({ value, checked, id, editTask, deleteTask, setCheckedFunc }) => {
  return(
    <>
      <div className={`flex justify-between border-2 border-black hover:border-gray-200 transition-colors px-5 py-2 my-2 ${checked ? 'bg-gray-200' : null}`}>
        <h1 className={`text-xl ${checked ? 'line-through': null}`}>{value}</h1>
        <div className="ml-5 flex">
          <button onClick={()=>{editTask(id)}} className="flex justify-center items-center hover:text-gray-300">
            <span className="material-icons" title="edit">edit</span>
          </button>
          <button onClick={()=>{deleteTask(id)}} className="flex justify-center items-center hover:text-gray-300">
            <span className="material-icons" title="delete">delete</span>
          </button>
          <button onClick={()=>{setCheckedFunc(id)}} className="flex justify-center items-center hover:text-gray-300">
            <span className="material-icons" title={!checked ? "done" : "not done"}>{!checked ? 'done' : 'remove_done'}</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Item;