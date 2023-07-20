import React from 'react'
import sell from '../assets/SELL BTC.png'
import buy from '../assets/BUY BTC.png'

export default function Box3() {
    return (
        <div className='box3'>
           <div className='box3_1 bg-white'>
            <img src={buy} className="icons m-t-18 buy-icons" alt=""/>
            <p className='f-s-14'>BUY BTC</p>
          </div>
          <div className='box3_1 bg-white'>
            <img src={sell} className="icons m-t-18 buy-icons" alt=""/>
            <p className='f-s-14'>SELL BTC</p>
          </div>

        </div>
    )
}