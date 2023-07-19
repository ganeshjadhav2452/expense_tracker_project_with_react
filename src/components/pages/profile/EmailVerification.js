import React, { useEffect, useRef, useState } from "react";
import emailPng from "../../../assets/email.png";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function EmailVerification() {
  const [isSendVerificationEmail, setIsSendVerificationEmail] = useState(false);
  const [isError, setIsError] = useState(null);
  const history = useHistory()
  const [isSent, setIsSent] = useState(false)
const email = localStorage.getItem('email')
  const sendVerificationEmail = async () => {

    try {
        const idToken = localStorage.getItem("token");
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAOp-3WPUP_Uno1qjXu2zBOG1d14B1CiP0",
        {
          requestType: "VERIFY_EMAIL",
          idToken,
        }
      );
      if(response.status === 200){
        setIsSent(true)
       
      }
    } catch (err) {
      console.log(err);
      setIsError('something went wrong ')
    }
  };

  useEffect(() => {
   
    if (isSendVerificationEmail) {
      sendVerificationEmail();
    }
  

    
  }, [isSendVerificationEmail]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ width: "100%", height: "100vh", backgroundColor: "#838383" }}
    >
      <h3 className="text-light">One Last & Crucial Step !</h3>
      <div
        className=" shadow bg-light "
        style={{ width: "70%", height: "40vh", border: "0.2rem solid yellow" }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center "
        
        >
        
            <img style={{ height: "5rem" }} className="mt-5 " src={emailPng} />
    

          <button
            onClick={() => {
               
              setIsSendVerificationEmail(!isSendVerificationEmail);
            }}
            className="btn mt-3 border-2 bg-warning fw-bold rounded"
          >
            Verify Email
          </button>
          <button
            onClick={() => {
              history.replace('/auth')
              
            }}
            className="btn mt-1 border-2 bg-warning fw-bold rounded"
          >
          Return Login
          </button>

        {isSent &&   <div class="alert alert-warning border-dark  alert-dismissible fade show mt-5" role="alert">Thank You We've successfuly sent  Verification E-mail  on {email} </div>}
        {isError &&   <div class="alert alert-warning border-dark  alert-dismissible fade show mt-5" role="alert">T{isError} </div>}
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
