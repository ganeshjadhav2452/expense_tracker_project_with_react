import React from 'react'
import './LandingPage.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function LandingPage() {
  const token = localStorage.getItem('token')
  return (
    <div>
             
      <div className="landing-page">
        <header>
          <div className="container">
            <a href="#" className="logo">Star <b>Expense</b></a>
            <ul className="links">
              <li>Home</li>
              <li>About Us</li>
              <li><Link  style={{textDecoration:'none', color:'#5d5d5d'}} to={token ? '/expensegenerator':'/auth'}> Expense Tracker</Link></li>
             
              <li><Link  style={{textDecoration:'none', color:'white'}} to='/auth'>Sign Up</Link></li>
            </ul>
          </div>
        </header>
        <div className="content">
          <div className="container">
            <div className="info">
              <h3>Looking For Expense Tracker ?</h3>
              <p>We're here to track your all expenses , give us a chance & we're sure you'll not regreate !</p>
              <button><Link  style={{textDecoration:'none', color:'white'}} to={token ? '/expensegenerator':'/auth'}>Get Started</Link></button>
            </div>
            <div className="image">
              <img src="https://i.postimg.cc/65QxYYzh/001234.png"/>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default LandingPage