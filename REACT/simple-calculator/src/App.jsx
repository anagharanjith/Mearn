import { useState } from 'react';
import './App.css'
import {TextField, Stack ,Button}from '@mui/material';



function App() {
// create state to store data
 const[interest,setInterest] =useState(0)
 const[principle,setPrinciple] =useState(0)
 const[rate,setRate] =useState(0)
 const[year,setYear] =useState(0)

//  create state for validation of input fields
 const[principleAmountValid,setPrincipleAmountValid] =useState(true)
 const[rateValid,setRateValid] =useState(true)
 const[yearValid,setYearValid] =useState(true)


 const handleReset = ()=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setPrincipleAmountValid(true)
  setRateValid(true)
  setYearValid(true)
 }
 const handleValidation = (e)=>{

    const{name,value}=e
    console.log(value,name)
    console.log(value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^\d*\.?\d+$/))
    { //valid
      if(name=='principle')
      {
        setPrinciple(value)
        setPrincipleAmountValid(true)
        
      }
      else if(name=='rate')
      {
        setRate(value)
        setRateValid(true)
      }
      else{
        setYear(value)
        setYearValid(true)
      }
    }
    else{
      //invalid
      if(name=='principle')
      {
        setPrinciple(value)
        setPrincipleAmountValid(false)
      }
      else if(name=='rate')
      {
        setRate(value)
        setRateValid(false)
      }
      else{
        setYear(value)
        setYearValid(false)
      }

    }   
 }

 const handleCalculate = ()=>{
  if(principle && rate && year){
    setInterest(principle*year*rate/100)
  }
  else{
    alert("please fill the form completely")
  }
 }
  return (
    <>
     <div style={{width:'100%',height:'110vh'}} className="d-flex justify-content-center align-items-center bg-dark">
     <div style={{width:'500px',height:'90%'}} className='bg-light p-5 rounded'>
      <h3>Simple Interest App</h3>
      <p>Calculate your simple interest Easily</p>
      <div className="d-flex justify-content-center align-items-center bg-warning rounded shadow flex-column text-light">
      <h1>₹ {interest}</h1>
      <p className="fw-bolder">Total Simple Interest</p>
      </div>
      <form className="mt-5">
        {/* principle */}
        <div className="mb-3">
        <TextField className='w-100' value={principle || ""} name='principle' onChange={e=>handleValidation(e.target)} id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined"  />
        {!principleAmountValid && <div className="text-danger ">**Invalid Principle Amount**</div>}
        </div>
        {/* rate */}
        <div className="mb-3">
        <TextField className='w-100' value={rate || ""}  id="outlined-basic-rate" name='rate' onChange={e=>handleValidation(e.target)} label="Rate of interest (p.a) %" variant="outlined" />
        {!rateValid && <div className="text-danger ">**Invalid Rate of Interest**</div>}
        </div>
        {/* time */}
        <div className="mb-3">
        <TextField className='w-100' value={year || ""}  id="outlined-basic-time" name='year' onChange={e=>handleValidation(e.target)} label="Time Peroid (Yr)" variant="outlined" />
        {!yearValid &&<div className="text-danger ">**Invalid Input Year**</div>}
        </div>
        {/* btn collection */}
        <Stack direction="row" spacing={2}>
        <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateValid || !yearValid} style={{width:'50%',height:'70px'}} className="bg-dark" variant="contained">CALCULATE</Button>
        <Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">RESET</Button>
        </Stack>
      </form>
     </div>
     </div>
    </>
  )
}

export default App
