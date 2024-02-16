import './App.css'
import style from './style.module.css'
import Sample from './components/Sample'
import Random from './components/Random'
import Todos from './components/Todos'
import { useState } from 'react'
import AllUsers from './components/AllUsers'

function App() {  
//js code 
const username="Max well"
const [userdetails,setUserDetails] = useState()
const handleGetData =(data)=>{
  setUserDetails(data)
}

  return (
  //jsx code is written inside return
  //<> --react fragments-- : holds multiple tags ,act as single parent</> 
    <> 
      <h1 style={{color:'red',fontSize:'60px',textAlign:'center'}} id='' className='head'>My First React Project</h1>
      <label htmlFor="">Username: {username}</label>
      <div className="border p-3 rounded">
        <input onChange={(e)=>handleGetData(e.target.value)} placeholder='Enter Your Name' type="text" className='formControl w-50' />
        {userdetails? <div  className="result ms-5">Output : {userdetails} </div>:<div  className="result">Nothing to diplay </div>}
      </div>
      <Sample/>
      <p className={style.group1}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla neque facilis possimus laborum enim, ullam non, quod debitis facere alias perspiciatis repellat deleniti nobis itaque? Sunt, culpa temporibus? Consectetur, pariatur!
      Cum officia vel voluptatibus, esse harum facere corrupti quaerat iure similique cu                                                         mque a, eos laboriosam tenetur repudiandae, adipisci placeat quasi! Voluptates dolores error tempore iure rem id reprehenderit dolor hic.
      Libero asperiores quisquam vitae neque corrupti rerum dolor molestias quibusdam odio, unde consequatur, sequi nam et optio non, doloribus illo delectus atque animi itaque nemo! Accusamus totam atque expedita consectetur.
      Illo in, totam blanditiis voluptate sit mollitia nisi, ipsa suscipit obcaecati eligendi aut aspernatur officiis, quibusdam similique sint doloremque animi explicabo eos. Ex aliquid laboriosam non consequatur maiores vel blanditiis!
      Inventore consectetur, assumenda possimus deserunt, soluta atque nam totam voluptate neque nulla ad facilis unde dolorem numquam! Vel in deserunt dolorem modi nobis sequi, animi tempora odit perspiciatis doloremque voluptas.</p>
      <Random/>
      <Todos/>
      <AllUsers/>
    </>
  )
}

export default App
