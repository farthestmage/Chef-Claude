import React from 'react'
import './header.css'
import chef from "../../assets/chef-logo.png"

const Header = () => {

  
  return (
   <header>
            <img src={chef}/>
            <h1>Chef Claude</h1>
        </header>
    

    
  )
}

export default Header