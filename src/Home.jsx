import React from 'react'
import Top from './Top'
import About from './About'
import HomeMenu from './HomeMenu'
import HomeFooter from './HomeFooter'
import HomeNavBar from './HomeNavBar'

const Home = () => {
  return (
    <>
    <HomeNavBar />
    <Top />
    <About />
    <HomeMenu />
    <HomeFooter />
    </>
  )
}

export default Home