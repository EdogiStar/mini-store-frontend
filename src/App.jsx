import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"

import ScrollToTop from "./components/ScrollToTop"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


function App() {
    
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })

function addToCart(product) {

  setCart((currentCart) => {

    const existingProduct = currentCart.find((item) => item._id === product._id)
        if (existingProduct) {
            return currentCart.map((item) => item._id === product._id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
          )
        }
       return [
      ...currentCart,
      {
        ...product,
        quantity: 1
      }
    ]
  })
}

function increaseQuantity(id) {

setCart((currentCart) =>

currentCart.map((item) =>

item._id === id
? {
...item,
quantity: item.quantity + 1
}
: item

)

)

}

function decreaseQuantity(id) {

setCart((currentCart) =>

currentCart
.map((item) =>

item._id === id
? {
...item,
quantity: item.quantity - 1
}
: item

)

.filter((item) => item.quantity > 0)

)

}

function removeItem(id) {

setCart((currentCart) =>

currentCart.filter(
(item) => item._id !== id
)

)

}


useEffect(() => {

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  )

}, [cart])

const cartCount = cart.reduce( (total, item) => total + item.quantity, 0)

  return (
     
    <>
      <ScrollToTop />
      <NavBar cart={cartCount}/>
      
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}/>} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}/>}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App