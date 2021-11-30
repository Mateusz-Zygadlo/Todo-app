const AddItem = () => {
  return(
    <form className="mt-10">
      <h1 className="text-4xl flex justify-center">Add item</h1>
      <div className="flex justify-center mt-4">
        <input type="text" name="task" placeholder="Enter item" className="w-60 border-b-2 border-black outline-none focus:border-blue-300 transition-colors" />
        <button type="submit" className="ml-2 border-2 border-transparent px-1 hover:border-gray-300 focus:border-blue-300 transition-colors">Submit</button>
      </div>
    </form>
  )
}

export default AddItem;