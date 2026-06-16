import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Shop({addToCart}) {
  // Store products
  const [products, setProducts] = useState([])

  // Track loading
  const [loading, setLoading] = useState(true)

  // Track errors
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }

        return response.json()
      })

      .then((data) => {
        setProducts(data)
      })

      .catch((err) => {
        setError(err.message)
      })

      .finally(() => {
        setLoading(false)
      })

  }, [])

  // Loading UI
  if (loading) {
    return <h2>Loading products...</h2>
  }

  // Error UI
  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-3xl font-bold mb-8">
          All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

{products.map((product) => (
  <ProductCard
    key={product.id}
    title={product.title}
    price={product.price}
    image={product.image}
    onAddToCart={() => addToCart(product)}
  />
))}

        </div>

      </div>
    </div>
  )
}

export default Shop