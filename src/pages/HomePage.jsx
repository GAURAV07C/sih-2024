import React from 'react'
import Nav from '../components/Home/Nav'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import SuccessStory from '../components/Home/SuccessStory'
import Event from '../components/Home/Event'
import Footer from '../components/Home/Footer'

const HomePage = () => {
  return (
    <div className=''>
        <Nav />
        <Hero />
        <Features />
        <SuccessStory />
        <Event />
        <Footer />
    </div>
  )
}

export default HomePage
