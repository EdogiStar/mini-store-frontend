function ProductCard({ title, price, image, onAddToCart }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
      
      {/* Image */}
      <div className="aspect-square bg-gray-100 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 truncate">
          {title}
        </h3>

        <p className="text-black font-bold mt-1">
          ${price}
        </p>

        <button
          onClick={onAddToCart}
          className="w-full mt-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard