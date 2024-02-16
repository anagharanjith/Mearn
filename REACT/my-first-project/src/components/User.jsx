import React from 'react'

//props : property of components

function User({share}) {
    const handleShow=(data)=>{
        alert(`${data}),Message:${share}`)
    }
  return (
    <>
    <h4>User Component</h4>
    <button onClick={()=>handleShow("This is Max Profile")} className="btn btn-success">Show</button>
    </>
  )
}

export default User

