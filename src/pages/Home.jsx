import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">

        <h1 className="text-4xl font-bold mb-4">
          Welcome to MiniStore
        </h1>

        <p className="text-gray-500 mb-6 max-w-md">
          Browse products and add items to your cart.
        </p>

        <Link
          to="/shop"
          className="bg-black text-white px-6 py-3 rounded-md"
        >
          Go to Shop
        </Link>

      </div>

      {/* Featured Section (static preview) */}
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-6">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Reusing ProductCard */}
          <div className="border p-4 rounded-md">
            Watch
          </div>

          <div className="border p-4 rounded-md">
            Headphones
          </div>

          <div className="border p-4 rounded-md">
            Camera
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home