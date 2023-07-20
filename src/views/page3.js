import React from 'react'
import List from   '../components/List'
import Header from   '../components/header'
import Footer from   '../components/footer'
const Data = [
    {
        name: 'You transfer 1.2 abCoin',
        value: "3:40",
        img:"https://img.icons8.com/fluency/48/monero.png"
  
      },
      {
        name: 'You sold 1.09877 EtherCoin',
        value: "10:50",
        img:"https://img.icons8.com/cotton/64/ethereum--v3.png"
  
      },
    {
      name: 'You sold 1.1 BTC',
      value: "10:30",
      img:"https://img.icons8.com/color/48/bitcoin--v1.png"

    },
    {
        name: 'You bought 0.12 dogecoin',
        value: "4:30",
        img: "https://img.icons8.com/color/48/tether--v2.png"
  
      },
      {
        name: 'You bought 3.12 Ether',
        value: "3:30",
        img:"https://img.icons8.com/color/48/ethereum.png"
  
      },
      {
        name: 'You transfer 1.2 abCoin',
        value: "3:40",
        img:"https://img.icons8.com/fluency/48/monero.png"
  
      },
      {
        name: 'You sold 1.09877 EtherCoin',
        value: "10:50",
        img:"https://img.icons8.com/cotton/64/ethereum--v3.png"
  
      },
      {
        name: 'You transfer 1.2 abCoin',
        value: "3:40",
        img:"https://img.icons8.com/fluency/48/monero.png"
  
      },
      {
        name: 'You sold 1.09877 EtherCoin',
        value: "10:50",
        img:"https://img.icons8.com/cotton/64/ethereum--v3.png"
  
      },
      {
        name: 'You Bought 1 coin',
        value: "12:40",
        img:"https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-cryptocurrency-cryptocurrency-justicon-lineal-color-justicon.png"
  
      },
      {
        name: 'You sold 2.1231 bitEther',
        value: "11:50",
        img:"https://img.icons8.com/external-filled-outline-wichaiwi/64/external-cryptocurrency-digital-asset-filled-outline-wichaiwi-3.png"
  
      },
  ];

  export default function Page3() {
    return (
        <div>
            <Header title="notification"/>
             <List data={Data} />
             <Footer/>
        </div>
    )
}