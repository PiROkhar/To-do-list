import React, { useState } from 'react'

const Form = () => {

  const [lists,setLists]=useState([]);
  const addTask = () =>{
    const Task=document.getElementById('enterTask').value;
    setLists(l => [...l,Task]);
    document.getElementById('enterTask').value="";
  }
  const remove = (index) =>{
    const Delete = lists.filter((_,i)=>i !== index); 
    setLists(Delete);
  }

  return (
    <div className='flex items-center h-screen justify-center '>
          <div className='bg-[#1f1926] w-[30%] min-h-[400px] p-6 mt-[-5%] flex gap-y-6  text-[#baa1d5] flex-col items-center rounded-md'>
            <h1 className='text-4xl font-semibold' >To-do List</h1>
            <div>
  {/* ADD*/}
              <div className='space-x-4'>
                    <input type='text' placeholder='Enter task' id='enterTask' className=' p-2 text-[#e6d2fc] rounded-md w-[250px] bg-[#382b47] placeholder:text-[#ffffff]   ' />
                    <button onClick={addTask} className='bg-[#e6d2fc] p-2 rounded-md text-[#382b47] font-semibold'>Add Task</button>
              </div>
  {/* Task */}
              <ul className='space-y-4 mt-6'>
                {lists.map((list,index)=> <li key={index} className='bg-[#baa1d5] p-2 w-[347px] text-[#1f1926] flex  rounded-md justify-between' >{list} <button className='text-[#792fef] hover:text-[#000] text-center rounded-full' onClick={() => remove(index)} >Delete</button> </li> )}
              </ul>

            </div>
        </div>
    </div>
    
  )
}

export default Form