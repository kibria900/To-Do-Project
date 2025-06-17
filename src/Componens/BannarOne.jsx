import React, { use, useEffect, useState } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { getDatabase, ref, set , push ,onValue ,remove } from "firebase/database";

const BannarOne = () => {
    const notify = () =>
      task == "" ?
      toast.error('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
    }) : 
    toast.success('🦄 Unbelievable Achievement!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
    });
    const [task , setTask] = useState("")
    const [taskError , setTaskError] = useState("")
    const [taskData , setTaskData] = useState([])
    const handleSubmit =(e) =>{
         e.preventDefault();
            if(!task){ 
                setTaskError("Enter Your Task")
                notify()
            } else{
                 const db = getDatabase();
                set(
                  push(ref(db,'todo/'), {
                   todoname:task,
                }).then(() =>{
                  notify()
                  setTask("")
                })
              );

            }
    }
  useEffect(() => {
  const db = getDatabase();
  const todoRaf = ref(db, 'todo/');
  onValue(todoRaf, (snapshot) => {
    const Arr = [];
    snapshot.forEach((item) => {
      Arr.push({value:item.val(),id:item.key        
      });
    });
    setTaskData(Arr);
  });
}, []);
    const handleChange =(e) =>{
        setTask(e.target.value);
        setTaskError("")
    }

    const handleDelete = (id) => {
  const db = getDatabase();
  remove(ref(db, 'todo/' + id)).then(() => {
    toast.warn('🗑️ Task Deleted!', {
      position: "top-right",
      autoClose: 1000,
      theme: "dark",
      transition: Zoom,
    });
  });
};
  return (

    <>

   <div className="flex items-center justify-center mt-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4">
  <form
    className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-6 w-full max-w-md"
    onSubmit={handleSubmit}
  >
    <h2 className="text-3xl font-bold text-indigo-700 text-center">📝 To-Do Project</h2>

    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">Name or Comment</label>
      <input
        value={task}
        type="text"
        onChange={handleChange}
        placeholder="Enter your name or a short comment"
        className="px-4 py-3 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
      />
      {/* <h2 className='text-red-500'>{taskError}</h2> */}
    </div>

    <button
      type="submit"
      className="w-full px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition duration-300 font-medium shadow-md">
      Submit
    </button>
  </form>

  <ToastContainer
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Zoom}
  />
</div>

<div className="p-4">
  <h2 className="text-[40px] font-semibold mb-4 text-center text-amber-500">Your Tasks</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {
      taskData.map((itme, index) => (
        <div key={index} className="bg-white border border-amber-400 text-gray-800 shadow-lg rounded-lg p-4 hover:bg-amber-100 transition flex flex-col justify-center items-center h-40">
          
          {/* Centered Text */}
          <p className="text-md  font-medium mb-4 text-center">📝 {itme.value.todoname}</p>

          {/* Buttons */}
          <div className="flex justify-center gap-3 mt-auto">
            <button 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg text-sm transition"
              onClick={() => handleEdit(itme)}
            >
              Edit
            </button>
            <button 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition"
              onClick={() => handleDelete(itme.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))
    }
  </div>
</div>


</>

  );
};

export default BannarOne;
