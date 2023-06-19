import React, { useEffect, useState } from 'react'
import './App.css';



const App = () => {
  const [task, setTask] = useState({ task: "" })
  const [data, setData] = useState([])
  const [show, setShow] = useState(true)
  const [edit, setEdit] = useState(true)
  const [updateId, setUpdateID] = useState("")


  const getTasks = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/all`, {
        method: "GET",
      });
      const result = await res.json();
      if (!result.error) {
        setShow(true)
        setData((prev) => { return result.data })
        console.log(result)
      } else {
        console.log(result.error)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handelAdd = async (event) => {
    event.preventDefault();

    try {
      const res = fetch(`http://127.0.0.1:8000/new`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(task)
      })
      const result = (await res).json

      if (!result.error) {
        setTask({ task: "" })
        getTasks()
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handelDelete = async (id) => {

    try {
      const res = await fetch(`http://127.0.0.1:8000/delete/${id}`, {
        method: "DELETE",
      })

      const result = await res.json();
      if (!result.error) {
        setData(result.task)
      } else {
        console.log(result.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handelEdit = async (id) => {
    try {

      const res = await fetch(`http://127.0.0.1:8000/edit/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(task)
      })

      const result = await res.json()
      if (!result.error) {
        setTask({ task: "" })
        setEdit(true)
        getTasks()
      }
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <div className='container'>
        <h1>ToDo List App</h1>
        <input id='input' placeholder='Enter your Task......' value={task.task} type='text' onChange={(e) => { setTask({ ...task, task: e.target.value }) }}></input>
        {edit ? <button id='add' onClick={handelAdd}>Add</button> :
          (<button style={{ marginRight: "2px" }} id='add'
            onClick={() => handelEdit(updateId)}>Save</button>)}

        {show ? data.map((todo) =>
        (<>
          <div className='task' key={todo?._id}>
            {todo?.task}
            <section className='crud'>
              
              <svg id='edit' onClick={() => (setTask({ task: todo.task }), setEdit(false), setUpdateID(todo._id))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            
              <svg id='complete' onClick={() => handelDelete(todo._id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
              </svg>
              {/* //how to add image in react */}
              {/* src={require('../assets/load.gif')} */}




            </section>

          </div>
        </>)
        ) : null}
      </div>

    </>

  )
}

export default App