import React from 'react'
import notFound from "../assets/404.mp4"
import home from "../assets/home.mp4"
import { Link } from 'react-router-dom'
export default function NotFound(page) {
    return (
        <div>
        {page.page==="NotFound" ?<div> <video className='container m-t-28 max-h' loop autoPlay muted playsInline>
            <source src={notFound} type="video/mp4" />
         </video>
           <h1>PAGE NOT FOUND</h1> 
            <Link to="/wallet" className='text-d-none'><div className='detail-button-buy m-auto'>GO TO WALLET</div> </Link></div>:
            <div> <video className='container m-t-28 max-h' loop autoPlay muted playsInline>
            <source src={home} type="video/mp4" />
         </video>
           <h1>HOME PAGE</h1> 
            <Link to="/wallet" className='text-d-none'><div className='detail-button-buy m-auto'>LOG IN</div> </Link></div>
            }
        </div>

    )
}