import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Home from "./pages/Home"
import Shop from "./pages/Shop"

import ScrollToTop from "./components/ScrollToTop"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


function App() {
    
    const [cart, setCart] = useState([])

function addToCart(product) {
  setCart((currentCart) => [
    ...currentCart,
    product
  ])
}

  return (
    <>
    <ScrollToTop />
      <NavBar cart={cart}/>
<p>Items in cart: {cart.length}</p>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}/>} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App