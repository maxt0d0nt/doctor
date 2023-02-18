import React from 'react'
import Accordion from '../components/accordion/Accordion'
import Hero from '../components/Hero/Hero'
import MainSquare from '../components/Mainsquare/MainSquare'
import { Navbar } from '../components/navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MainSquare />
      <Accordion />
    </>
  )
}

export default Home