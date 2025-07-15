import React from 'react'
import Sensex from '../components/Sensex'
import BodyTop from '../components/BodyTop'
import Body from '../components/Body'
import BodyB from '../components/BodyB'
import Slide from '../components/Slide'
import Last from '../components/Last'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='home'>
    <Navbar></Navbar>
    <Sensex></Sensex>
    <BodyTop></BodyTop>
    <Body/>
    <BodyB></BodyB>
    <Slide></Slide>
    <Last></Last>
    <Footer/>
    <hr/>
    <div className="homediv"></div>
    </div>
  )
}

export default Home