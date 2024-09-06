import React from 'react'
import Nav from '../components/Home/Nav'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import SuccessStory from '../components/Home/SuccessStory'
import Event from '../components/Home/Event'
import Footer from '../components/Home/Footer'
// import PhotoSlider from '../components/Home/PhotoSlider'
import PhotoGrid from '../components/Home/PhotoGrid'

const HomePage = () => {
  return (
    <div className=''>
        <Nav />
        {/* <PhotoSlider /> */}
        <Hero />
        <Features />
        <SuccessStory />
        <Event />
        <PhotoGrid />
        <Footer />
    </div>
  )
}

export default HomePage
