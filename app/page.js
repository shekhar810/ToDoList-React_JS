"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [maintask, setmaintask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log({title});
    // console.log(title,desc);

    setmaintask([...maintask,{title,desc}])
    
    settitle("")
    setdesc("")
    console.log(maintask)
  }

  const deleteHandler = (i) => {
      let copytask = [...maintask]
      copytask.splice(i,1)
      setmaintask(copytask) 
  }

  let renderTask=<h2>No Task Available</h2>

  if(maintask.length>0){
    renderTask = maintask.map((t,i)=>{
      return( 
      <li key={i} className='flex  justify-between items-center mb-5'>
        <div className='flex justify-between items-center  w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h5 className='text-l font-semibold'>{t.desc}</h5>
        </div>
        <button onClick={() => {
          deleteHandler(i)
        }}
        className='bg-red-400 text-white mt-1 px-2 py-1  rounded font-bold
        '>Delete</button>
      </li>
      );
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-center text-2xl font-bold'>Shekhar's To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter Task Here' className='
        text-2xl border-purple-900 border-2 rounded m-5 px-4 py-2' 
        value={title}
        onChange={(e)=>{
            settitle(e.target.value)
        }}  
        />

        <input type="text" placeholder='Enter Description Here' className='
        text-2xl border-purple-900 border-2 rounded m-5 px-4 py-2' 
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}

        />

        <button className='bg-black text-white text-2xl px-4 py-2 font-bold rounded m-5
        '>Add Task
        </button>
      </form>
      <hr />
      <div className='p-4 bg-slate-300'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page