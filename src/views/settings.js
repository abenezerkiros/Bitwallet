import React from 'react'
import Header from "../components/header"
import { Link } from 'react-router-dom'
import Footer from   '../components/footer'
export default function Settings() {
    return (
        <div>
            <Header title="Settings"/>
            <Link to="/" className='text-d-none'><div className='detail-button-buy m-auto '>LogOut</div></Link>
            <Footer/>
        </div>

    )
}