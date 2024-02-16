import React from 'react'
import useFetch from '../hooks/useFetch'

function Todos() {
    const result = useFetch("https://jsonplaceholder.typicode.com/todos")
    console.log(result);
  return (
    <>
    <div className="text-center text-primary m-5">All Todo List</div>
        <div className="container">
        <table className="table shadow mt-5">
            <thead>
                <tr>
                <th>USER ID</th>
                <th>ID</th>
                <th>TITLE</th>
                <th>COMPLETED</th>
                </tr>
            </thead>
            <tbody>
                {
                  result?.length>0?result.map((todo,index)=>(
                    <tr key={index}>
                      <td>{todo.userId}</td>
                      <td>{todo.id}</td>
                      <td>{todo.title}</td>
                      <td>{todo.completed?"yes":"no"}</td>
                    </tr>
                  )): <tr className='text-danger fs-4 fw-bolder'>Nothing to display!!!</tr>
                }
            </tbody>
        </table>
        </div>
    </>
  )
}

export default Todos