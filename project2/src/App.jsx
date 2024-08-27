import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Hero1 from './components/hero1.jsx'
import Footer from './components/footer.jsx'

function App() {
  const images = [
    {
      key: 1,
      img: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      key: 2,
      img: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      key: 3,
      img: "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      key: 4,
      img: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      key: 5,
      img: "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      key: 6,
      img: "https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      key: 7,
      img: "https://images.pexels.com/photos/96627/pexels-photo-96627.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      key: 8,
      img: "https://images.pexels.com/photos/960137/pexels-photo-960137.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]
  return (
    <>
    <Navbar />
    <Hero />
    <Hero1 />
    <Footer />
    </>
  )
}

export default App;
