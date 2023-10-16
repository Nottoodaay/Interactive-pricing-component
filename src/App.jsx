import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Price } from './components/Price'
import { Toggle } from './atoms/Toggle'
import { Footer } from './components/Footer'
import { Viwes } from './components/Viwes'

function App() {
  const [rangeValue, setRangeValue] = useState(`${16}`)
  const [rangeValueYearly, setRangeValueYearly ] = useState(`${144}`)
  const [value, setValue] = useState()
  const [toggle, setToggle] = useState(false)
  const [viwes, setViwes] = useState(`${100}k`)
  

  const valueChange = (value, toggle) =>{
   if(toggle){
    if(value == 0){
      setRangeValueYearly(`${90}`)
      setViwes(`${10}k`)
    }
    if(value == 25){
      setRangeValueYearly(`${108}`)
      setViwes(`${50}k`)
    }
    if(value == 50){
      setRangeValueYearly(`${144}`)
      setViwes(`${100}k`)
    }
    if(value == 75){
      setRangeValueYearly(`${180}`)
      setViwes(`${500}k`)
    }
    if(value == 100){
      setRangeValueYearly(`${225}`)
      setViwes(`${1}m`)
    }
   } else{
     if(value == 0){
      setRangeValue(`${10}`)
      setViwes(`${10}k`)
    }
    if(value == 25){
      setRangeValue(`${12}`)
      setViwes(`${50}k`)
    }
    if(value == 50){
      setRangeValue(`${16}`)
      setViwes(`${100}k`)
    }
    if(value == 75){
      setRangeValue(`${20}`)
      setViwes(`${500}k`)
    }
    if(value == 100){
      setRangeValue(`${25}`)
      setViwes(`${1}m`)
    }
   }
  }

  useEffect(()=>{
    valueChange(value, toggle)
  },[toggle, value])

  return (
    <>
      <div className='app-container'>
          <div className='header'>
            <h2>Simple, traffic-based pricing</h2>
            <p>Sign-up for our 30-day trail. No credit card required.</p>
          </div>
          
          <div className='pricing-container'>
            <div className='price-viwes-container'>
                <Viwes viwes={viwes} />

                <Price toggle={toggle} rangeValueYearly={rangeValueYearly} rangeValue={rangeValue} />
            
                <input
                style={{backgroundSize:`${value}%`}} 
                type="range" step={25} 
                min='0' 
                max='100' 
               onChange={(event)=>setValue(event.target.value)} 
               />
            </div>
            
            <div className='switch-container'>
              <div className='billing month'>
                Monthly Billing
              </div>

              <Toggle 
              toggle={toggle} 
              setToggle={setToggle}
              />   

              <div className='billing year'>
                Yearly Billing
              </div>
              <div className='discount'>25% discount</div>
            </div>
          <Footer/>
          </div>
      </div>
    </>
  )
}

export default App
