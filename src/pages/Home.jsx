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

    {/* Hero Section */}
    <section
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 className="text-white text-4xl md:text-6xl font-bold max-w-3xl">
          Discover Products You’ll Love
        </h1>

        <p className="text-gray-200 mt-6 max-w-xl text-lg">
          Explore quality products and enjoy a simple shopping experience.
        </p>

        <Link
          to="/shop"
          className="mt-8 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Shop Now
        </Link>

      </div>

    </section>

    {/* Featured */}
    <div className="max-w-7xl mx-auto px-4 py-20">

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