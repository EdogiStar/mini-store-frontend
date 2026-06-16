import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

function Home() {
  const featuredProducts = [
    {
      id: 1,
      title: "Classic Watch",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Wireless Headphones",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Vintage Camera",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=800",
    },
  ]

  return (
    <div className="min-h-screen">

      {/* Hero */}
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
          Shop Now
        </Link>

      </div>

      {/* Featured */}
      <div className="max-w-7xl mx-auto px-4 pb-20">

        <h2 className="text-2xl font-bold mb-6">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              onAddToCart={() =>
                console.log("Added", product.title)
              }
            />
          ))}

        </div>

        {/* More button */}
        <div className="text-center mt-10">

          <Link
            to="/shop"
            className="inline-block border px-6 py-3 rounded-md hover:bg-black hover:text-white"
          >
            View More Products
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Home