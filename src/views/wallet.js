import React from 'react'
import Header from '../components/header.js'
import Box1 from '../components/box1.js'
import Box2 from '../components/box2.js'
import Box3 from '../components/box3.js'
import Footer from '../components/footer.js'
export default function Wallet() {
    return (
        <div>
            <Header title="Bitcoin Wallet"/>
            <Box1/>
            <Box2/>
            <Box3/>
            <Footer/>
        </div>
    )
}