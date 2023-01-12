import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItem';
import "./Navbar.css"
function Navbar() {

    const [clicked,setClicked]=useState(false)
   const handelClick=()=>{
    setClicked(!clicked)
   }
    const Elt = (<nav className='NavBarItem'>
                  <h1 className='navBar-logo'>Nour voyage</h1>
                   <div className='menu-icon' onClick={handelClick}>
                    <i className={
                        clicked ?"fa-solid fa-times":"fa-solid fa-bars" 
                        
                    }>

                    </i>
                    
                    </div>

                    <ul className= {clicked ?'navBar-menu':"navBar-menu active"}>
                  {
                    MenuItems.map(
                        (item,index) =>
                        {
                            return(
                                <li key={index}>
                               
                                        <Link className={item.cName} to={item.url}>
                                        <i className={item.icon}></i>
                                            {item.title}

                                    </Link>
                                </li>
                            )
                        }
                    )
                  }
                    </ul>

                </nav>
                
                
                )
    return Elt;
}



export default Navbar

