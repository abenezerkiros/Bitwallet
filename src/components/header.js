import React from 'react'
import IconBack from '../assets/ICON MENU.svg'
import IconMore from '../assets/ICON MORE.svg'
import edit from '../assets/rename.svg'
import Courier from '../assets/package.svg'
import remove from '../assets/minus-button.svg'
import share from '../assets/upload.svg'
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
export default function Header(title) {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
    return (
        <div className='bg-white w-100'>
           <div className='header-container'> 
             <img src={IconBack} className="back-icon" alt="" onClick={() => navigate(-1)}/>
             <p className='f-s-28'>{title.title}</p>
             <img src={IconMore} className="more-icon" alt="" onClick={()=>{toggle?setToggle(false):setToggle(true)}}/>
           </div>
       {  toggle?  <div className='header-list z-max'>
              <div className='header-lists d-flex j-c-space'>
               <span className='m-t-14'>Edit</span>
               <img src={edit} className='menu-icons m-t-14' alt=""/>
              </div>
              <div className='header-lists d-flex  j-c-space'>
              <span className='m-t-14'>Courier info</span>
              <img src={Courier} className='menu-icons m-t-14' alt=""/>
              </div>
              <div className='header-lists d-flex j-c-space'>
              <span className='m-t-14'>Share</span>
              <img src={share} className='menu-icons m-t-14' alt=""/>
              </div>
              <div className='header-lists b-none d-flex j-c-space'>
              <span className='m-t-14'>Remove</span>
              <img src={remove} className='menu-icons m-t-14' alt=""/>
            </div>  
              
           </div>:<div></div>}
        </div>
    )
}