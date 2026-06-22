import { Link } from "react-router-dom"

function Success() {
    return (
        <div className="min-h-screen flex justify-center items-center">
           <div className="text-center">
           <h1 className="text-5xl mb-6">✅</h1>
           <h2 className="text-3xl font-bold">Order Placed</h2>
           <p className="mt-4 text-gray-600">Thank you for shopping.</p>
           <Link to="/shop" className="inline-block mt-8 bg-black text-white px-8 py-3 rounded">«»
              Continue Shopping
           </Link>
        </div>
      </div>
    )
}

export default Success