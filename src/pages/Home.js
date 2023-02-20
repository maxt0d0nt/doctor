import React from 'react'
import Accordion from '../components/accordion/Accordion'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import MainSquare from '../components/Mainsquare/MainSquare'
import { Navbar } from '../components/navbar/Navbar'
import Opinions from '../components/Opinions/Opinions'
import Speciality from '../components/Specialitys/Speciality'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MainSquare />
      <Accordion />
      <Speciality />
      <Opinions />
      <Footer />
    </>
  )
}

export default Home