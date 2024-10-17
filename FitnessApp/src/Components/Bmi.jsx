import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Bmi.css'
const Bmi = () => {
    const[weight,setWeight]=useState(0)
    const[height,setHeight]=useState(0)
    const [bmi,setBmi]=useState('')
    const[message,setMessage]=useState('')
    const reload =()=>{
        window.location.reload()
    }
    const calcBmi=(event)=>{
     event.preventDefault()
        if(weight==0 || height==0){
            alert ('Please enter a valid Weight and Height')
        }
        else{
            const bmi=(weight/(height*height))
            setBmi(bmi.toFixed(1))
       if(bmi<18.5){
        setMessage('You are underweight')
       }
       else if (bmi>=18.5 && bmi<24.9){
        setMessage('You are normal weight')
       }else {
        setMessage('You are overweight' )
       }
        }
    }
    return (
    <div className='container'>
        <h2 className='heading'BMI CALCULATOR></h2>
        <form onSubmit={calcBmi}>
            <div>
                <label className='weight'>Weight(Kg)</label><br/>
                <input value={weight} on onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <div>
                <label className='height'>Height(m)</label><br/>
                <input value={height} on onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div>
                <Button  variant="contained" color="primary"  size="large" type='submit'>Submit</Button><br/><br/>
                <Button  variant="contained" color="primary"  size="large" onClick={reload} type='submit'>Reload</Button><br/><br/>
            </div>
        </form>
        <div className='result'>
            <h3>Your BMI is :{bmi}</h3><br/><br/>
            <p>{message}</p>
        </div>

    </div>
  )
}

export default Bmi