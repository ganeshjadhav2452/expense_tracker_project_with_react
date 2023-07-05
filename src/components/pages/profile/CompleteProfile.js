import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function CompleteProfile() {
  const history = useHistory()
    const completeProfileClickHandler = ()=>{
       history.replace('/profile')
    }
  return (
    <div className='d-flex align-items-center justify-content-center flex-column' style={{height:'100vh', width:'100%', backgroundColor:'#838383'}}>
        <p className='h1 m-4 text-warning shadow fw-bold'>welcome to expense tracker</p>
        
        <button onClick={completeProfileClickHandler} className='btn btn-warning fw-bold '>Complete Profile</button>
    </div>
  )
}

export default CompleteProfile