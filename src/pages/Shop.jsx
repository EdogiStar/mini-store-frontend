import ProductCard from "../components/ProductCard"

function Shop() {
  // Temporary static data (later you will replace with FakeStore API)
  const products = [
    {
      id: 1,
      title: "Classic Minimalist Watch",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Premium Wireless Headphones",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Vintage Film Camera",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Running Shoes Pro",
      price: 185,
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "Luxury Leather Bag",
      price: 550,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Stylish Sunglasses",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 7,
      title: "Red Sports Sneakers",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 8,
      title: "Wireless Earbuds",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80&w=800",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">All Products</h1>
          <p className="text-gray-500 mt-1">
            Showing all available items in the store.
          </p>
        </div>

        {/* Search bar UI only */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">

          <input
            type="text"
            placeholder="Search products..."
            className="border px-4 py-2 rounded-md w-full md:w-64"
          />

          <button className="px-4 py-2 border rounded-md">
            Filter
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              onAddToCart={() => console.log("Added:", product.title)}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Shop