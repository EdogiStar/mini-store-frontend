import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ScrollToTop from "./components/ScrollToTop"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App