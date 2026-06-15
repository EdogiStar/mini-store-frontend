function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold text-black mb-2">
              MiniStore
            </span>
            <p className="text-sm text-gray-500">
              © 2024 MiniStore. Built for beginners.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-500 hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-black">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-black">
              Contact
            </a>
          </div>

          {/* Icons */}
          <div className="flex gap-4 text-gray-500">
            <a href="#" className="p-2 hover:text-black">
              🌐
            </a>
            <a href="#" className="p-2 hover:text-black">
              📱
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer