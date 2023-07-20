import React from 'react'
import List from   '../components/List'
import Header from   '../components/header'
import Footer from   '../components/footer'
const Data = [
    {
      name: 'bitcoin',
      value: "$4.7800",
      img:"https://img.icons8.com/color/48/bitcoin--v1.png"

    },
    {
        name: 'dogecoin',
        value: "$1.097",
        img: "https://img.icons8.com/color/48/tether--v2.png"
  
      },
      {
        name: 'Ether',
        value: "$23.4",
        img:"https://img.icons8.com/color/48/ethereum.png"
  
      },
      {
        name: 'abCoin',
        value: "$203.4",
        img:"https://img.icons8.com/fluency/48/monero.png"
  
      },
      {
        name: 'EtherCoin',
        value: "$3.4",
        img:"https://img.icons8.com/cotton/64/ethereum--v3.png"
  
      },
      {
        name: 'coin',
        value: "$3.4",
        img:"https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-cryptocurrency-cryptocurrency-justicon-lineal-color-justicon.png"
  
      },
      {
        name: 'bitEther',
        value: "$3.24",
        img:"https://img.icons8.com/external-filled-outline-wichaiwi/64/external-cryptocurrency-digital-asset-filled-outline-wichaiwi-3.png"
  
      },
  ];
export default function Page2() {
    return (
        <div>
            <Header title="Other Coins"/>
             <List data={Data} />
             <Footer/>
        </div>
    )
}