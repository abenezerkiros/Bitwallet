import React from 'react'
import bitcoin from '../assets/ICON BITCOIN.png'
import down from '../assets/ICON ARROW DOWN (DETAILED STATISTIC).svg'
import { useState } from "react";
export default function Box1() {
    const [detail, setDetail] = useState(false);
    return (
        <div className={detail?'box1 box1-drop bg-white':'box1 bg-white'} >
         <div className='container'>
            <div className='container-sub'>
                <div className='container-icon'>
                    <img src={bitcoin} className='icons bicoin' alt=""/>
                    <p className='icon-para'>bitcoin</p>
                </div>
                <div className='para-BTC'>BTC</div>
            </div>
            <h1 className='d-flex m-t-15 btc-amount'>3.529020 BTC</h1>
            <div className='container-icon  j-c-space m-t-15'>
                    <p className='btc-value'>$19.153 USD</p>
                    <div className='icon-round'>-2.32%</div>
            </div>
            <img src={down} alt='' className={detail?'d-none':'icons m-t-28'} onClick={()=>{setDetail(true)}}/>
            <div className={detail?'d-flex j-c-space m-t-28':'d-none'}>
            <div className='detail-button-buy'>BUY BTC</div>
            <div className='detail-button-buy sell-color'>SELL BTC</div>
            </div>
            <img src={down} alt='' className={detail?'icons m-t-28 reverse':'d-none'} onClick={()=>{setDetail(false)}}/>
         </div>
        </div>
    )
}