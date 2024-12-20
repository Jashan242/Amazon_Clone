// import React from 'react';
import logo from "../../assets/amazon.svg"
import location from "../../assets/location.svg"
import search from "../../assets/magnifying.svg"
import cart from "../../assets/cart.svg"
import "./Header.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import {CartContext} from '../../App';

export default function Header() {

    const {size:cartSize}=useContext(CartContext);

    const filterOptions=[
        {label: "All", value:"all"},
        {label: "Electronics", value:"electronics"},
        {label: "Fashion", value:"fashion"},
        {label: "Home", value:"home"},
        {label: "Grocery", value:"grocery"},
    ]

    const accountOptions=[
        {label: "Account & Lists", value:"accounts"},
        {label: "Orders & Returns", value:"orders"},
        {label: "Try Prime", value:"prime"},
    ]

    const optionMapper=({label, value})=>(
        <option value={value}>{label}</option>
    )

  return (
    <div className='amazon-header flex gap-4 items-center px-2 py-1 bg-[#131921] text-nowrap'>
        <img className='amazon-branding-logo flex p-1 items-end self-stretch rounded-sm outline-none max-w-[70px] hover:outline-[1.4px] hover:outline-white'
         src={logo} alt='amazon-logo'></img>
        <div className='amazon-order-location flex gap-[2px] justify-center p-1 rounded-sm items-center outline-none hover:outline-[1.4px] hover:outline-white'>
            <img className='location-icon w-4 mb-1' src={location}></img>
            <div className='location-text-container flex flex-col text-white gap-0'>
                <span className='current-location'>Delivering to Kashipur 244713</span>
                <span className='update-location'>Update location</span>
            </div>
        </div>
        <div className='search-bar flex flex-1 min-w-[198px] min-h-10 rounded bg-white overflow-hidden'>
            <select className='search-filter w-fit max-w-14 min-h-full p-2 border-transparent border-solid border-r-[#cdcdcd] bg-[#e6e6e6] text-sm'>
                {filterOptions.map(optionMapper)}
            </select>
            <input className="search-input min-h-full p-2 border-none text-[#111] text-sm flex-1" type="search" placeholder="Search Amazon.in"></input>
            <button className="search-btn rounded-none"><img className="search-img h-6" src={search} alt="search-icon"></img></button>
        </div>

        <div className="language-container p-1 rounded-sm items-center outline-none hover:outline-[1.4px] hover:outline-white">
            <select className="langauge-select h-fit flex p-2 text-sm font-bold items-end text-white bg-transparent">
                <option value={"hi"}>in HI</option>
                <option value={"en"}>us EN</option>
            </select>
        </div>

        <div className="account-menu h-full flex justify-center items-start flex-col gap-0.5 text-white rounded-sm p-1 outline-none hover:outline-[1.4px] hover:outline-white">
            <span className="account-name text-xs font-normal px-1">Hello, sign in</span>
            <select className="text-sm font-bold bg-transparent p-0 m-0 text-white">
            {accountOptions.map(optionMapper)}
          </select>         
        </div>

        <div className="return-menu h-full flex justify-center items-start flex-col gap-0.5 p-1 text-white bg-transparent rounded-sm outline-none hover:outline-[1.4px] hover:outline-white">
            <span className="return text-xs font-normal">Returns</span>
            <span className="order text-sm font-bold">& Orders</span>
        </div>

        <Link to={"/cart"}>
            <div className="cart-container flex h-full items-end p-1 text-white relative rounded-sm outline-none hover:outline-[1.4px] hover:outline-white">
                <div className="flex gap-1 items-center">
                    <img className="w-[38px]" src={cart} alt="cart-icon"></img>
                    <span className="cart-count absolute top-1.5 left-[18px] text-base font-bold text-[#f08806] bg-[#131921] p-0 px-0.5">{cartSize}</span>
                </div>
                <span className="cart-text pl-1">Cart</span>
            </div>
        </Link>
        
    </div>
  )
}
