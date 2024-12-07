import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/Cart";
import {mockData} from "../utils/mockdata"

const ProductDetail = () => {
  const { productId } = useParams();
  const product = mockData.find((item) => item.name === productId);
  console.log(productId, product);

  const { addToCart } = useContext(CartContext);
//   function handleClick() {
//     addToCart(product);
//   }

  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(event) {
    setQuantity(parseInt(event.target.value, 10));
  }

  function handleClick() {
    addToCart({ ...product, quantity });
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto mt-[140px] p-4 gap-4 flex justify-around items-center">
      <div className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-3/4 rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-4 flex flex-col">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-2xl text-gray-700 mt-2">
          Price: <span className="text-red-500">${product.price}</span>{" "}
          <span className="line-through text-gray-500">${product.mrp}</span>{" "}
          <span className="text-green-500">({product.discount} off)</span>
        </p>
        <p className="text-md mt-2">{product.description}</p>
        <h2 className="text-xl py-2 font-bold mt-4">Offers:</h2>
        <div className="flex gap-4">
          <p className="w-2/4 border-2 border-gray-200 rounded-md p-4">
            {product.offers.bankOffer}
          </p>
          <p className="w-2/4 border-2 border-gray-200 rounded-md p-4">
            {product.offers.partnerOffers}
          </p>
        </div>

        <h2 className="text-xl font-bold mt-4">Features:</h2>
        <ul className="list-inside text-md">
          {product.features.map((feature, index) => (
            <li key={index}>- {feature}</li>
          ))}
        </ul>
        <h2 className="mt-4 font-bold text-xl">Warranty:</h2>
        <p className="text-md"> {product.warranty}</p>
      </div>
      <div className="border-gray-200 border-2 p-4 flex flex-col gap-2 w-2/4">
        <h2 className="text-3xl">${product.price}</h2>
        <h2 className="text-xl text-blue-700">FREE Delivery</h2>
        <h2 className="text-xl text-green-800 font-bold">In stock</h2>
        <p className="text-xl font-semibold">Quantity</p>
        <select
          className="border-2 border-gray-300 rounded py-1 text-xl"
          value={quantity}
          onChange={handleQuantityChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button
          onClick={() => handleClick()}
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Add to Cart
        </button>
        <button className="bg-orange-500 text-white p-2 rounded ml-2">
          Buy Now
        </button>
        <div className="flex justify-between">
          <p>Payment</p>
          <p>Secure transaction</p>
        </div>
        <div className="flex justify-between">
          <p>Ships from</p>
          <p>Amazon</p>
        </div>
        <div className="flex justify-between">
          <p>Sold by</p>
          <p>ResQTech India Pvt Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


