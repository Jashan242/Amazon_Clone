import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import Card from './Card';
import Carousel from './Carousel';
import palette from '../assets/palette.jpg'
import bluetooth from '../assets/bluetooth.jpg'
import alarm from '../assets/alarm.jpg'
import bottle from '../assets/bottle.jpg'
import buds from '../assets/buds.jpg'
import camera from '../assets/camera.jpg'
import coffee from '../assets/coffee.jpg'
import fitness from '../assets/fitness.jpg'
import kettle from '../assets/kettle.jpg'
import laptop_stand from '../assets/laptop_stand.jpg'
import mouse from '../assets/mouse.jpg'
import pot from '../assets/pot.jpg'
import speaker from '../assets/speaker.jpg'
import yoga from '../assets/yoga.jpeg'
import led from '../assets/led.jpg'

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        setData({ products: mockdata });
    }, []);


    return (
        <div className='flex flex-col items-center bg-[#e9eded] w-full min-h-screen'>
            <CategoryFilter />
            {/* <Sidebar open={isSidebarOpen} onClose={handleCloseSidebar} /> */}
            
            <Carousel/> 
            <div className='mt-[800px]'>
                <Card/>
            </div>           
            
            <div className="container mx-auto flex flex-wrap justify-center pb-10 gap-6 px-4 mt-10">
                {data?.products?.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                        <ProductCard data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}


const mockdata=[
    {
        "id":1,
      "name": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "price": 19.99,
      "image": palette
    },
    {
      "id":2,
      "name": "Bluetooth Wireless Headphones",
      "description": "Experience high-quality sound with these Bluetooth wireless headphones. Featuring noise-cancellation technology and up to 30 hours of battery life.",
      "price": 59.99,
      "image": bluetooth
    },
    {
        "id":3,
      "name": "Ceramic Coffee Mug Set",
      "description": "A set of four durable ceramic coffee mugs with a minimalist design. Microwave and dishwasher safe, perfect for your morning coffee.",
      "price": 24.99,
      "image": coffee
    },
    {
        "id":4,
      "name": "Stainless Steel Water Bottle",
      "description": "Keep your drinks cold for 24 hours or hot for 12 hours with this vacuum-insulated stainless steel water bottle. BPA-free and eco-friendly.",
      "price": 14.99,
      "image": bottle
    },
    {
        "id":5,
      "name": "Wireless Gaming Mouse",
      "description": "A high-performance wireless gaming mouse with customizable RGB lighting and adjustable DPI settings. Perfect for both gaming and office work.",
      "price": 29.99,
      "image": mouse
    },
    {
        "id":6,
      "name": "Yoga Mat with Carrying Strap",
      "description": "A non-slip yoga mat with a 6mm thickness for maximum comfort and support during your workouts. Includes a convenient carrying strap.",
      "price": 22.99,
      "image": yoga
    },
    {
        "id":7,
      "name": "LED Desk Lamp with USB Charging Port",
      "description": "This modern LED desk lamp offers adjustable brightness and a USB charging port for convenience. Ideal for work or study spaces.",
      "price": 39.99,
      "image": led
    },
    {
        "id":8,
      "name": "Instant Pot 7-in-1 Pressure Cooker",
      "description": "A 7-in-1 multifunctional pressure cooker that can slow cook, steam, sauté, and more. Save time and cook delicious meals effortlessly.",
      "price": 89.99,
      "image": pot
    },
    {
        "id":9,
      "name": "Noise Cancelling Earbuds",
      "description": "Compact noise-cancelling earbuds with a sleek design and long battery life. Enjoy your favorite music anywhere, anytime.",
      "price": 49.99,
      "image": buds
    },
    {
        "id":10,
      "name": "Digital Alarm Clock with Night Light",
      "description": "A digital alarm clock with a built-in night light and snooze function. The modern design fits any bedroom aesthetic.",
      "price": 17.99,
      "image": alarm
    },
    {
        "id":11,
      "name": "Smartphone Camera Lens Kit",
      "description": "Enhance your smartphone photography with this lens kit, including wide-angle, macro, and fisheye lenses. Compatible with most smartphones.",
      "price": 34.99,
      "image": camera
    },
    {
        "id":12,
      "name": "Foldable Laptop Stand",
      "description": "A lightweight and foldable laptop stand with adjustable angles for ergonomic typing and viewing. Suitable for laptops up to 15 inches.",
      "price": 25.99,
      "image": laptop_stand
    },
    {
        "id":13,
      "name": "Electric Kettle with Auto Shut-Off",
      "description": "A stainless steel electric kettle with a 1.7-liter capacity and auto shut-off feature. Boil water quickly and safely.",
      "price": 29.99,
      "image": kettle
    },
    {
        "id":14,
      "name": "Smart Fitness Tracker",
      "description": "Track your steps, heart rate, and sleep patterns with this smart fitness tracker. Features a waterproof design and long battery life.",
      "price": 49.99,
      "image": fitness
    },
    {
        "id":15,
      "name": "Portable Bluetooth Speaker",
      "description": "Compact and powerful, this portable Bluetooth speaker delivers crystal-clear sound and deep bass. Perfect for parties or outdoor adventures.",
      "price": 39.99,
      "image": speaker
    }
  ]
  