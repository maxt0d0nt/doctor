import React from 'react'
import Hero from '../components/Hero/Hero'
import MainSquare from '../components/Mainsquare/MainSquare'
import { Navbar } from '../components/navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MainSquare />
    </>
  )
}

export default Home