import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Shop() {
  // 1. Create state to hold products
  const [products, setProducts] = useState([])

  // 2. Fetch products after component loads
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            All Products
          </h1>

          <p className="text-gray-500 mt-1">
            Showing all available items in the store.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              onAddToCart={() =>
                console.log("Added:", product.title)
              }
            />
          ))}

        </div>

      </div>
    </div>
  )
}

export default Shop