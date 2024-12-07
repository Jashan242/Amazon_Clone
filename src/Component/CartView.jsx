import { useState, useContext } from "react";
import { CartContext } from "../Context/Cart";
import { Link } from "react-router-dom";
import dropdown from '../assets/dropdown.svg';

function CartView() {
  const { cartItems, addToCart, clearItems, getTotal, removeFromCart } = useContext(CartContext);
  const [EmiDetailsOpen, setEmiDetailsOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#e9eded] mt-[140px]">
      <div className="max-w-[1500px] mx-auto px-4 flex justify-center gap-4">
        {/* Left Side - Cart Items */}
        <div className="flex-1 min-w-[642px] max-w-[1180px] bg-white rounded p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl">Shopping Cart</h2>
            <button 
              onClick={clearItems} 
              className="px-4 py-1 hover:bg-gray-100 rounded"
            >
              Empty Cart
            </button>
          </div>
          <hr className="mb-4" />
          
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 border-b">
              {/* <img 
                src={item.images[0]} 
                alt={item.title} 
                className="aspect-square w-[100px] object-contain" 
              /> */}
              <img src={item.image && item.image.length > 0 ? item.image : ''} alt={item.title} className="aspect-square w-[100px] object-contain" />

              <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-between">
                  <div>
                    <strong className="text-lg">{item.name}</strong>
                    <p className="py-2">{item.description}</p>
                    <strong className="text-md">${item.price}</strong>
                  </div>
                  
                  {/* <strong className="text-green-600">{item.discountPercentage}% off</strong> */}
                </div>
                <div className="flex items-center gap-4 pt-3">
                  <button 
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button 
                    onClick={() => removeFromCart(item)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
          <h3 className="py-2 text-right font-bold">
              Subtotal : ${getTotal().toFixed(2)}
              </h3>
        </div>
        

        {/* Right Side - Checkout and Suggestions */}
        <div className="w-[300px] space-y-4">
          {/* Checkout Section */}
          <div className="bg-white rounded p-4">
            <div className="space-y-4">
              {/* Free Delivery Section */}
              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-1" defaultChecked />
                <div>
                  <strong className="text-[#067d62] block">
                    Your order is eligible for FREE Delivery.
                  </strong>
                  <span>
                    Choose <Link to={'#'} className="text-[#007185] hover:text-[#c7511f] hover:underline">FREE Delivery</Link> at checkout.
                  </span>
                </div>
              </div>

              {/* Subtotal Section */}
              <div className="text-lg">
                <div className="font-bold">
                  Subtotal ({cartItems.length} items): ${getTotal().toFixed(2)}
                </div>
                <div className="flex items-center gap-2 text-sm mt-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>This order contains a gift</span>
                </div>
              </div>

              <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] rounded-full py-2 text-sm font-medium">
                Proceed to Buy
              </button>

              {/* EMI Section */}
              <div className="border rounded">
                <div 
                  className="flex justify-between items-center p-3 cursor-pointer"
                  onClick={() => setEmiDetailsOpen(!EmiDetailsOpen)}
                >
                  <span>EMI Available</span>
                  <img 
                    src={dropdown} 
                    className={`w-4 h-4 transition-transform ${EmiDetailsOpen ? "rotate-180" : ""}`} 
                    alt="dropdown" 
                  />
                </div>
                {EmiDetailsOpen && (
                  <div className="p-3 text-sm border-t">
                    Your order qualifies for EMI with valid credit cards...
                    <Link to={"#"} className="text-[#007185] hover:text-[#c7511f] hover:underline ml-1">
                      Learn more
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="bg-white rounded p-4">
            <h3 className="text-lg font-bold mb-4">
              Customers who bought items in your cart also bought
            </h3>
            <div className="space-y-4">
              {[...cartItems, ...cartItems, ...cartItems].slice(0, 8).map((product) => (
                <CartSuggestionCard key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CartSuggestionCard = ({ data }) => {
  const { name, image, price } = data;
  const imageSrc= image && image.length > 0 ? image : '';
  return (
    <div className="suggestion-card flex gap-3 p-4">
      {/* <img src={images[0]} alt={title} className="aspect-square h-[100px]" /> */}
      <img src={imageSrc} alt={name} className="aspect-square h-[100px]" />
      <div className="text-[#007185] text-sm details flex flex-col gap-1">
        {name}
        <span>⭐⭐⭐⭐⭐ </span>
        <span className="text-[#812704]">${price}</span>
        <button className="rounded-full w-3/4 text-xs py-0.5 px-1.5 bg-[#ffd814]">Add to Cart</button>
      </div>
    </div>
  );
};

export default CartView;
