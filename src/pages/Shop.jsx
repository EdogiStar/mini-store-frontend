import ProductCard from "../components/ProductCard"
function Shop() {
    const products = fetch('https://fakestoreapi.com/products')
     .then(response => response.json());
  // Temporary static data (later you will replace with FakeStore API)
  
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
          )
         )
      }

        </div>
      </div>
    </div>
  )
}

export default Shop