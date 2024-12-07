import { useContext } from 'react';
import { CartContext } from '../Context/Cart';

function ProductCard({ data }) {
  const { addToCart } = useContext(CartContext);

  function handleClick(data) {
    addToCart(data);
  }

  return (
    <div className="w-full max-w-[300px] flex flex-col h-full p-2 md:max-w-[250px] sm:max-w-[200px]">
      <div className="aspect-square overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="text-left flex flex-col flex-grow">
        <h1 className="text-xl sm:text-lg font-bold p-2">{data.name}</h1>
        <p className="text-sm sm:text-xs p-2">{data.description}</p>
        <p className="text-lg sm:text-md font-semibold p-2">Price: {data.price}</p>
        <div className="mt-auto">
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded-md w-full text-sm sm:text-xs"
            onClick={() => handleClick(data)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
