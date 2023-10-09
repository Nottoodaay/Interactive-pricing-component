import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [rangeValue, setRangeValue] = useState(`$ ${16}.00`)
  const [rangeValueYearly, setRangeValueYearly ] = useState(`$ ${144}/year`)
  const [value, setValue] = useState()
  const [toggle, setToggle] = useState(false)
  

  const valueChange = (value, toggle) =>{
   if(toggle){
    if(value == 0){
      setRangeValueYearly(`$ ${90}.00`)
    }
    if(value == 25){
      setRangeValueYearly(`$ ${108}.00`)
    }
    if(value == 50){
      setRangeValueYearly(`$ ${144}.00`)
    }
    if(value == 75){
      setRangeValueYearly(`$ ${180}.00`)
    }
    if(value == 100){
      setRangeValueYearly(`$ ${225}.00`)
    }
   } else{
     if(value == 0){
      setRangeValue(`$ ${10}.00`)
    }
    if(value == 25){
      setRangeValue(`$ ${12}.00`)
    }
    if(value == 50){
      setRangeValue(`$ ${16}.00`)
    }
    if(value == 75){
      setRangeValue(`$ ${20}.00`)
    }
    if(value == 100){
      setRangeValue(`$ ${25}.00`)
    }
   }
  }

  useEffect(()=>{
    valueChange(value, toggle)
  },[toggle, value])


  return (
    <>
      <div className='app-container'>
          <div>{toggle ? rangeValueYearly : rangeValue}</div>
          <input type="range" step={25} min='0' max='100' onChange={(event)=>setValue(event.target.value)} />
          <div onClick={()=>setToggle(!toggle)} >click me</div>
      </div>
    </>
  )
}

export default App
