import { Link } from 'react-router-dom'

function NavBar({cartCount}) {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold text-black">
              MiniStore
            </Link>

            {/* Links */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-black"
              >
                Home
              </Link>

              <Link
                to="/shop"
                className="text-sm text-gray-600 hover:text-black"
              >
                Shop
              </Link>
              
              <Link to="/cart" className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
              >
                Cart
              <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
              </Link>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center">
            <button className="relative p-2">
              🛒

              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default NavBar