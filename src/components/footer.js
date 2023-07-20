import React from 'react'
import wallet from '../assets/ICON WALLET.svg'
import explore from '../assets/ICON EXPLORE COINS.svg'
import noti from '../assets/ICON NOTIFICATION.svg'
import settings from '../assets/ICON SETTINGS.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer bg-white'>
            <div className="container d-flex  j-c-space p-t-18 containerr">
             <Link to="/wallet"><img src={wallet} className='foot-icon' alt/></Link>
             <Link to="/page2"><img src={explore} className='foot-icon' alt/></Link>
             <Link to="/page3"><img src={noti}  className='foot-icon' alt/></Link>
             <Link to="/settings"><img src={settings} className='foot-icon' alt/></Link>
             </div>
        </div>
    )
}