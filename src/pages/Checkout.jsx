import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Checkout({ cart, clearCart }) {

const total = cart.reduce(
(total, item) =>
total + item.price * item.quantity,
0
)

const [form, setForm] = useState({
name: "",
email: "",
phone: "",
address: ""
})

function handleChange(e) {
setForm({
...form,
[e.target.name]: e.target.value
})
}

async function handleSubmit(e) {e.preventDefault()
    try {
        const order = {
            customer: form,
            items: cart, total
        }
        const response = await fetch("${import.meta.env.VITE_API_URL}/api/orders",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
        })
        if (!response.ok) {
            const error = await response.text()
            alert(error)
            return
        }
        clearCart()
        navigate('/success')
    }catch (error) {
        alert( error.message )
    }
   }

return (

<div className="min-h-screen bg-gray-50"><div className="max-w-7xl mx-auto px-4 py-12"><h1 className="text-4xl font-bold mb-10">
Checkout
</h1><div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{/* LEFT */}

<div className="lg:col-span-2 bg-white rounded-xl p-8"><h2 className="text-2xl font-semibold mb-6">
Delivery Information
</h2><form
onSubmit={handleSubmit}
className="space-y-5"
><input
type="text"
name="name"
placeholder="Full Name"
value={form.name}
onChange={handleChange}
required
className="w-full border p-4 rounded"
/>

<input
type="email"
name="email"
placeholder="Email Address"
value={form.email}
onChange={handleChange}
required
className="w-full border p-4 rounded"
/>

<input
type="tel"
name="phone"
placeholder="Phone Number"
value={form.phone}
onChange={handleChange}
required
className="w-full border p-4 rounded"
/>

<textarea
name="address"
placeholder="Delivery Address"
value={form.address}
onChange={handleChange}
required
rows="5"
className="w-full border p-4 rounded"
/>


<button
type="submit"
className="w-full bg-black text-white py-4 rounded hover:opacity-90"
>

Place Order

</button>

</form>

</div>


{/* RIGHT */}

<div className="bg-white rounded-xl p-8 h-fit">

<h2 className="text-2xl font-semibold mb-6">
Order Summary
</h2>


<div className="space-y-4">

{cart.map((item)=>(

<div
key={item._id}
className="flex justify-between"
>

<div>

<p className="font-medium">
{item.title}
</p>

<p className="text-gray-500">

Qty:
{item.quantity}

</p>

</div>

<p>

₦{item.price * item.quantity}

</p>

</div>

))}

</div>


<hr className="my-6"/>


<div className="flex justify-between font-bold text-xl">

<span>
Total
</span>

<span>

₦{total}

</span>

</div>

</div>

</div>

</div>

</div>

)

}

export default Checkout