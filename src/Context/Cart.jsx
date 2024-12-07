import { useState, useEffect, createContext } from 'react'


// export default function Cart() {
//   export const cartContext=createContext();
//   export const 
//   return (
//     <div>Cart</div>
//   )
// }

export const CartContext=createContext();

export const CartProvider=({children})=>{

  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): [])
  
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(cartItem => cartItem.id === item.id);
      
      if (itemExists) {
        // If the item exists, just increase its quantity
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };
  
  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const isPresent = prevItems.find((cartItem) => cartItem.id === item.id);
      if (isPresent.quantity === 1) {
        return prevItems.filter((cartItem) => cartItem.id !== item.id);
      } else {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  //Clear Cart
  const clearItems=()=>{
    setCartItems([]);
  }

  //get total
  const getTotal=()=>{
    const cartTotal=cartItems.reduce((total, item)=> total + (item.price * item.quantity), 0);
    // return Number(cartTotal.toFixed(2));
    return cartTotal;
  }

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(()=>{
    const items=localStorage.getItem("cartItems");
    if(items){
      setCartItems(JSON.parse(items));
    }
  }, [])

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearItems,
      getTotal
    }}
    >
      {children}
    </CartContext.Provider>
  )

}