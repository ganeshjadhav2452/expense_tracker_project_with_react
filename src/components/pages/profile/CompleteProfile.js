import React, { useEffect, useRef,useState } from 'react'
import userImg from '../../../assets/user.png'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
function CompleteProfile() {
  const [submitClicked, setSubmitClicked] = useState(false)
  const userNameRef = useRef();
  const photoUrlRef = useRef();
  const history = useHistory()
  const completeProfileSubmitHandler=async()=>{
   
  
    const idToken = localStorage.getItem('token')
    const displayName = userNameRef.current.value;
    const photoUrl = photoUrlRef.current.value;

    if(!idToken || !displayName || !photoUrl) return;

    try{
      const response  = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAOp-3WPUP_Uno1qjXu2zBOG1d14B1CiP0',{
        idToken,
        displayName,
        photoUrl,
        returnSecureToken:true
      })
    
      if(response.status === 200 ){
        console.log('profile updated successfuly')
        userNameRef.current.value  = '';
        photoUrlRef.current.value = '';
        history.replace('/emailverification')
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    completeProfileSubmitHandler()
  },[submitClicked])
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '100%', height: '100vh', backgroundColor: '#838383'}}>
       <h3 className='text-light'>Complete User Profile</h3>
      <div className=' shadow bg-light ' style={{ width: '70%', height: '40vh' ,border:'0.2rem solid yellow'}}>
       
        <form className='d-flex flex-column  ' onSubmit={(e)=>{
          e.preventDefault()
          setSubmitClicked(!submitClicked)
        }}>
          <div className=' d-flex flex-row justify-content-around  ' style={{marginBottom:'2rem'}}>
            <div className=' ' style={{ marginTop: '11%' }}>

            <lable htmlFor='nameInput'><img style={{ height: '2rem' }} className='mr-1' src={userImg} />select Profile Image: </lable>
           
              <input className=' border-top border-left border-right'  ref={userNameRef} type='text' id='nameInput' />
            </div>

            <div className='ml-5 ' style={{ marginTop: '11%' }}>
              <lable htmlFor='inputImage'><img style={{ height: '2rem' }} className='mr-1' src={userImg} />select Profile Image: </lable>
              <input className='border-top border-left border-right' ref={photoUrlRef} id='inputImage' type="text"  />
            </div>
          </div>

          <button className='w-25 mt-3 btn border-2 bg-warning fw-bold rounded' style={{marginLeft:'20rem'}} type='submit'>Update</button>
        </form>
      </div>

    </div>
  )
}

export default CompleteProfile