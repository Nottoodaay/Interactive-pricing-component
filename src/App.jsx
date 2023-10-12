import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [rangeValue, setRangeValue] = useState(`${16}`)
  const [rangeValueYearly, setRangeValueYearly ] = useState(`${144}`)
  const [value, setValue] = useState()
  const [toggle, setToggle] = useState(false)
  

  const valueChange = (value, toggle) =>{
   if(toggle){
    if(value == 0){
      setRangeValueYearly(`${90}`)
    }
    if(value == 25){
      setRangeValueYearly(`${108}`)
    }
    if(value == 50){
      setRangeValueYearly(`${144}`)
    }
    if(value == 75){
      setRangeValueYearly(`${180}`)
    }
    if(value == 100){
      setRangeValueYearly(`${225}`)
    }
   } else{
     if(value == 0){
      setRangeValue(`${10}`)
    }
    if(value == 25){
      setRangeValue(`${12}`)
    }
    if(value == 50){
      setRangeValue(`${16}`)
    }
    if(value == 75){
      setRangeValue(`${20}`)
    }
    if(value == 100){
      setRangeValue(`${25}`)
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
            <div>{
              toggle ? 
              <div>
                <div>{`$ ${rangeValueYearly}`}</div>
                <p>/year</p> 
              </div> 
              : 
              <div>
                <div>{`$ ${rangeValue}`}</div>
                <p>/monthly</p> 
              </div>
            }
            </div>
            
            <input
             style={{backgroundSize:`${value}%`}} 
             type="range" step={25} 
             min='0' 
             max='100' 
             onChange={(event)=>setValue(event.target.value)} />
            
            <div className='switch-container'>
              <p className='billing monthly'>
                Monthly Billing
              </p>
            
            <div className='switch'>
              <Form>
                <Form.Check
                  type='switch'
                  onClick={()=>setToggle(!toggle)}
                />
              </Form>
            </div>
             

              <p className='billing yearly'>
                Yearly Billing
              </p>
            
            </div>
           


            <div className='footer'>

            </div>
          </div>
      </div>
    </>
  )
}

export default App
