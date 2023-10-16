import React from 'react'

import '../App.css'

export const Price = ({toggle, rangeValueYearly, rangeValue}) => {
  return (
    <>
    { toggle ? 
        <div className='price-container'>
            <div className='price'>
                {`$ ${rangeValueYearly}`}
            </div>
            <p>/year</p> 
        </div> 
        : 
        <div className='price-container'>
            <div className='price'>
                {`$ ${rangeValue}`}
            </div>
            <p>/monthly</p> 
        </div>
        }
    </>
  )
}
