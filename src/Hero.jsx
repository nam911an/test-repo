import React from 'react'
import './grid.css';
const hero = () => {
  return (
      <>
    <div>this is hero component</div>
    <div className="container">
        <div className="row">
        <div className="columns two bg-yellow-500">hey</div>
        <div className="columns eight bg-pink-500 mt-4 sm:mt-0">hey76843</div>
        <div className="columns two bg-yellow-500">hey3</div>
        </div>
    </div>
    </>
    
  )
}

export default hero