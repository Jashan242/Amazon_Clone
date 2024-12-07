import { useContext } from 'react';
import { CartContext } from '../Context/Cart';
import { useNavigate } from 'react-router-dom';

function ProductCard({data}) {
  console.log(data);
    const {addToCart} = useContext(CartContext)
    const navigate = useNavigate();

    function handleClick(data){
         addToCart(data);
         console.log(data.id)
         navigate(`/product/${data.id}`);
    }
  return (
    <div className='flex flex-col h-full'>
        <div className='aspect-square overflow-hidden'>
            <img src={data.image} alt={data.name} className='object-contain' />
        </div>
        <div className='text-left flex flex-col flex-grow'>
            <h1 className='text-2xl font-bold p-2'>{data.name}</h1>
            <p className='text-md p-2'>{data.description}</p>
            <p className='text-xl font-semibold p-2'>Price: ${data.price}</p>
            <div className='mt-auto'>
                <button className='bg-yellow-500 text-white py-2 px-4 rounded-md w-full' onClick={()=>handleClick(data)}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard



