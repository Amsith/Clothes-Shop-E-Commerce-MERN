import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './MainComponents/Navbar/Navbar'
import { Home } from './MainComponents/Home/Home'
import Footer from './MainComponents/Footer/Footer'
import Mens from './MainComponents/Mens/Mens'
import Womens from './MainComponents/Womens/Womens'
import Kids from './MainComponents/Kids/Kids'
import Admin from './MainComponents/MainAdmin/Admin/Admin'
import About from './MainComponents/About/About'
import AddToCart from './MainComponents/AddToCart/AddToCart'


//Cart function
import { createContext, useState } from 'react'
export const shopperCart = createContext()

function App() {

  const [cart,setCart] = useState([])

  return (
    <shopperCart.Provider value={{cart,setCart}} >
      
      <BrowserRouter>
      <Navbar />
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/mens' element={<Mens/>} />
          <Route path='/womens' element={<Womens/>} />
          <Route path='/kids' element={<Kids/>} />

     
          <Route path='/admin/*' element={<Admin/>} />
          <Route path='/about/:id' element={<About/>} />
          <Route path='/addtocart' element={<AddToCart/>} />
          
       



      </Routes>
     <Footer/>

    </BrowserRouter >
    </shopperCart.Provider>

  )
}

export default App
