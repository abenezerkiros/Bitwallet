import React from 'react'

export default function List(data) {
    let Data=data.data
    return (<div className='p-b-100'>
        {Data.map((item)=>{
         return <div className='list bg-white d-flex j-c-space'>
             <div className=' d-flex'>
                 <img src={item.img} className='noti-icons'/>
                 <p className='noti-name'>{item.name}</p>
             </div>
             <div className='noti-value'>{item.value}</div>
        </div>})}
        </div>
    )
}