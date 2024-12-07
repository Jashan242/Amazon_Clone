import logo from "../assets/amazon.svg";
import location from "../assets/location.svg";
import search from "../assets/magnifying.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Cart";
import { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/utils"; // Import Firebase authentication
import CategoryFilter from "./CategoryFilter";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const [user, setUser] = useState(null); // Track the signed-in user
  const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown visibility

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update the user state
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null); // Reset user on logout
      setShowDropdown(false); // Close dropdown
    });
  };

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Electronics", value: "electronics" },
    { label: "Fashion", value: "fashion" },
    { label: "Home Appliances", value: "home" },
    { label: "Health & Fitness", value: "health" },
    { label: "Kitchen Appliances", value: "kitchen" },
  ];

  const optionMapper = ({ label, value }) => (
    <option value={value} key={value}>
      {label}
    </option>
  );

  const categories = [
    { name: "Fresh" },
    { name: "MAX Player" },
    { name: "Sell" },
    { name: "Best Sellers" },
    { name: "Today's Deals" },
    { name: "Mobiles" },
    { name: "Electronics" },
    { name: "Home & Kitchen" },
    { name: "Customer Service" },
    { name: "Prime" },
    { name: "New releases" },
    { name: "Amazon Pay" },
    { name: "Fashion" },
  ];

  return (
    <header className="w-full m-0 p-0 fixed top-0 left-0 right-0 z-30">
      <div className="amazon-header flex gap-4 items-center px-2 py-1 bg-[#131921] text-nowrap">
        <img
          className="amazon-branding-logo flex p-1 items-end self-stretch rounded-sm outline-none max-w-[70px] hover:outline-[1.4px] hover:outline-white"
          src={logo}
          alt="amazon-logo"
        ></img>

        <div className="amazon-order-location flex gap-[2px] justify-center p-1 rounded-sm items-center outline-none hover:outline-[1.4px] hover:outline-white">
          <img className="location-icon w-4 mb-1" src={location} alt="location-icon"></img>
          <div className="location-text-container flex flex-col text-white gap-0">
            <span className="current-location">
              Delivering to Kashipur 244713
            </span>
            <span className="update-location">Update location</span>
          </div>
        </div>

        <div className="search-bar flex flex-1 min-w-[198px] min-h-10 rounded bg-white overflow-hidden">
          <select className="search-filter w-fit max-w-14 min-h-full p-2 border-transparent border-solid border-r-[#cdcdcd] bg-[#e6e6e6] text-sm">
            {filterOptions.map(optionMapper)}
          </select>
          <input
            className="search-input min-h-full p-2 border-none text-[#111] text-sm flex-1"
            type="search"
            placeholder="Search Amazon.in"
          ></input>
          <button className="search-btn rounded-none bg-[#febd69] p-1">
            <img
              className="search-img h-6"
              src={search}
              alt="search-icon"
            ></img>
          </button>
        </div>

        <div
          className="account-menu h-full flex justify-center items-start flex-col gap-0.5 text-white rounded-sm p-1 relative"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          {!user ? (
            <Link to="/signin" className="text-white no-underline flex flex-col">
              <span className="account-name text-xs font-normal px-1">
                Hello, sign in
              </span>
              <span className="text-sm font-bold bg-transparent p-0 m-0">
                Account Options ▼
              </span>
            </Link>
          ) : (
            <>
              <span className="account-name text-xs font-normal px-1">
                Hello, {user.displayName}
              </span>
              <span className="text-sm font-bold bg-transparent p-0 m-0">
                Account Options ▼
              </span>

              {showDropdown && (
                <div className="absolute top-full right-0 bg-white text-black shadow-md p-2 rounded">
                  <button
                    className="w-full text-left p-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div className="return-menu h-full flex justify-center items-start flex-col gap-0.5 p-1 text-white bg-transparent rounded-sm outline-none hover:outline-[1.4px] hover:outline-white">
          <span className="return text-xs font-normal">Returns</span>
          <span className="order text-sm font-bold">& Orders</span>
        </div>

        <Link to={"/cart"}>
          <div className="cart-container flex h-full items-end p-1 text-white relative rounded-sm outline-none hover:outline-[1.4px] hover:outline-white">
            <div className="flex gap-1 items-center">
              <img className="w-[38px]" src={cart} alt="cart-icon"></img>
              <span className="cart-count absolute top-1.5 left-[18px] text-base font-bold text-[#f08806] bg-[#131921] p-0 px-0.5">
                {cartItems.length}{" "}
              </span>
            </div>
            <span className="cart-text pl-1">Cart</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 bg-[#232f3e] text-white">
        <CategoryFilter />
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex p-2 border-white cursor-pointer whitespace-nowrap"
          >
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
