function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem
}) {

const total = cart.reduce(

(total, item) =>

total + item.price * item.quantity,

0

)

if (cart.length === 0) {
return (

<div className="min-h-screen p-6">
<h2>Your cart is empty</h2>
</div>

)
}

return (

<div className="max-w-6xl mx-auto p-6">

<h1 className="text-3xl font-bold mb-8">
Your Cart
</h1>


{cart.map((item) => (

<div
key={item._id}
className="border rounded p-4 mb-4 flex gap-4"
>

<img
src={item.image}
alt={item.title}
className="w-28 h-28 object-cover"
/>


<div className="flex-1">

<h2 className="font-semibold">
{item.title}
</h2>


<p>
₦{item.price}
</p>


<div className="flex items-center gap-2 mt-3">

<button
onClick={() =>
decreaseQuantity(item._id)
}
className="border px-3"
>
−
</button>


<span>
{item.quantity}
</span>


<button
onClick={() =>
increaseQuantity(item._id)
}
className="border px-3"
>
+
</button>


<button
onClick={() =>
removeItem(item._id)
}
className="ml-4 text-red-500"
>
🗑
</button>

</div>


<p className="mt-3">

Subtotal:

₦{item.price * item.quantity}

</p>

</div>

</div>

))}


{/* Grand Total */}

<div className="mt-8">

<h2 className="text-2xl font-bold">

Grand Total:

₦{total}

</h2>

</div>

</div>

)

}

export default Cart