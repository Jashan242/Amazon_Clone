import palette from "../assets/palette.jpg";
import bluetooth from "../assets/bluetooth.jpg";
import alarm from "../assets/alarm.jpg";
import bottle from "../assets/bottle.jpg";
import buds from "../assets/buds.jpg";
import camera from "../assets/camera.jpg";
import coffee from "../assets/coffee.jpg";
import fitness from "../assets/fitness.jpg";
import kettle from "../assets/kettle.jpg";
import laptop_stand from "../assets/laptop_stand.jpg";
import mouse from "../assets/mouse.jpg";
import pot from "../assets/pot.jpg";
import speaker from "../assets/speaker.jpg";
import yoga from "../assets/yoga.jpeg";
import led from "../assets/led.jpg";

export const mockData = [
    {
      "id": 1,
      name: "Eyeshadow Palette with Mirror",
      price: 19.99,
      mrp: 29.99,
      discount: "33%",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      offers: {
        bankOffer: "Get 10% off on select credit cards.",
        partnerOffers: "Free shipping on orders over $50.",
      },
      warranty: "1 Year Warranty from date of purchase",
      features: [
        "Versatile range of shades",
        "Built-in mirror for convenience",
        "Compact and travel-friendly design",
      ],
      image: palette,
      category: "fashion"
    },
    {
      "id": 2,
      name: "Bluetooth Wireless Headphones",
      price: 59.99,
      mrp: 79.99,
      discount: "25%",
      description:
        "Experience high-quality sound with these Bluetooth wireless headphones. Featuring noise-cancellation technology and up to 30 hours of battery life.",
      offers: {
        bankOffer: "Get $15 off on select credit cards.",
        partnerOffers: "Buy one, get one 50% off.",
      },
      warranty: "1 Year Warranty from date of purchase",
      features: [
        "Noise-cancellation technology",
        "30 hours of battery life",
        "Comfortable and lightweight design",
      ],
      image: bluetooth,
      category: "electronics"
    },
    {
      "id": 3,
      name: "Ceramic Coffee Mug Set",
      price: 24.99,
      mrp: 34.99,
      discount: "29%",
      description:
        "A set of four durable ceramic coffee mugs with a minimalist design. Microwave and dishwasher safe, perfect for your morning coffee.",
      offers: {
        bankOffer: "Get 5% off on select credit cards.",
        partnerOffers: "Free gift with purchase over $40.",
      },
      warranty: "No warranty",
      features: [
        "Microwave and dishwasher safe",
        "Minimalist design",
        "Durable ceramic material",
      ],
      image: coffee,
      category: "home appliances"
    },
    {
      "id": 4,
      name: "Stainless Steel Water Bottle",
      price: 14.99,
      mrp: 19.99,
      discount: "25%",
      description:
        "Keep your drinks cold for 24 hours or hot for 12 hours with this vacuum-insulated stainless steel water bottle. BPA-free and eco-friendly.",
      offers: {
        bankOffer: "Get 10% off on select credit cards.",
        partnerOffers: "Free shipping on orders over $30.",
      },
      warranty: "1 Year Warranty from date of purchase",
      features: [
        "Vacuum-insulated for temperature retention",
        "BPA-free and eco-friendly",
        "Durable stainless steel construction",
      ],
      image: bottle,
      category: "health and fitness"
    },
    {
      "id": 5,
      name: "Wireless Gaming Mouse",
      price: 29.99,
      mrp: 39.99,
      discount: "25%",
      description:
        "A high-performance wireless gaming mouse with customizable RGB lighting and adjustable DPI settings. Perfect for both gaming and office work.",
      offers: {
        bankOffer: "Get $5 off on select credit cards.",
        partnerOffers: "Free mouse pad with purchase.",
      },
      warranty: "1 Year Warranty from date of purchase",
      features: [
        "Customizable RGB lighting",
        "Adjustable DPI settings",
        "Ergonomic design for comfort",
      ],
      image: mouse,
      category: "electronics"
    },
    {
      "id": 6,
      name: "Yoga Mat with Carrying Strap",
      price: 22.99,
      mrp: 29.99,
      discount: "23%",
      description:
        "A non-slip yoga mat with a 6mm thickness for maximum comfort and support during your workouts. Includes a convenient carrying strap.",
      offers: {
        bankOffer: "Get 10% off on select credit cards.",
        partnerOffers: "Free shipping on orders over $50.",
      },
      warranty: "No warranty",
      features: [
        "Non-slip surface for safety",
        "6mm thickness for comfort",
        "Includes carrying strap for portability",
      ],
      image: yoga,
      category: "health and fitness"
    },
    {
      "id": 7,
      name: "LED Desk Lamp with USB Charging Port",
      price: 39.99,
      mrp: 49.99,
      discount: "20%",
      description:
        "This modern LED desk lamp offers adjustable brightness and a USB charging port for convenience. Ideal for work or study spaces.",
      offers: {
        bankOffer: "Get 5% off on select credit cards.",
        partnerOffers: "Free shipping on orders over $50.",
      },
      warranty: "2 Year Warranty from date of purchase",
      features: [
        "Adjustable brightness levels",
        "USB charging port",
        "Sleek modern design",
      ],
      image: led,
      category: "home appliances"
    },
    {
      "id": 8,
      name: "Instant Pot 7-in-1 Pressure Cooker",
      price: 89.99,
      mrp: 119.99,
      discount: "25%",
      description:
        "A 7-in-1 multifunctional pressure cooker that can slow cook, steam, sauté, and more. Save time and cook delicious meals effortlessly.",
      offers: {
        bankOffer: "Get $10 off on select credit cards.",
        partnerOffers: "Free shipping on orders over $100.",
      },
      warranty: "1 Year Warranty from date of purchase",
      features: [
        "7 cooking functions in one",
        "Fast cooking with pressure technology",
        "Easy-to-use interface",
      ],
      image: pot,
      category: "kitchen appliances"
    },
    {
      "id": 9,
      name: "Noise Cancelling Earbuds",
      price: 49.99,
      mrp: 69.99,
      discount: "29%",
      description:
        "Compact noise-cancelling earbuds with a sleek design and long battery life. Enjoy your favorite music anywhere, anytime.",
      offers: {
        bankOffer: "Get 10% off on select credit cards.",
        partnerOffers: "Buy one, get one 20% off.",
      },
      warranty: "1 Year Warranty from date of purchase",
      features: [
        "Noise-cancelling technology",
        "Long battery life",
        "Sleek, portable design",
      ],
      image: buds,
      category: "electronics"
    },
    {
      "id": 10,
      name: "Digital Alarm Clock with Night Light",
      price: 17.99,
      mrp: 24.99,
      discount: "28%",
      description:
        "A digital alarm clock with a built-in night light and snooze function. The modern design fits any bedroom aesthetic.",
      offers: {
        bankOffer: "Get $5 off on select credit cards.",
        partnerOffers: "Free shipping on orders over $30.",
      },
      warranty: "1 Year Warranty from date of purchase",
      features: [
        "Digital display with night light",
        "Snooze function",
        "Modern design",
      ],
      image: alarm,
      category: "home appliances"
    },
    {
      "id": 11,
      name: "Smartphone Camera Lens Kit",
      price: 34.99,
      mrp: 49.99,
      discount: "30%",
      description:
        "Enhance your smartphone photography with this lens kit, including wide-angle, macro, and fisheye lenses. Compatible with most smartphones.",
      offers: {
        bankOffer: "Get 10% off on select credit cards.",
        partnerOffers: "Free shipping on orders over $40.",
      },
      warranty: "No warranty",
      features: [
        "Wide-angle, macro, and fisheye lenses",
        "Compatible with most smartphones",
        "Improves smartphone photography",
      ],
      image: camera,
      category: "electronics"
    },
    {
      "id": 12,
      name: "Foldable Laptop Stand",
      price: 25.99,
      mrp: 39.99,
      discount: "35%",
      description:
        "A lightweight and foldable laptop stand with adjustable angles for ergonomic typing and viewing. Suitable for laptops up to 15 inches.",
      offers: {
        bankOffer: "Get 5% off on select credit cards.",
        partnerOffers: "Free shipping on orders over $50.",
      },
      warranty: "1 Year Warranty from date of purchase",
      features: [
        "Adjustable angles for comfort",
        "Foldable for easy storage",
        "Suitable for laptops up to 15 inches",
      ],
      image: laptop_stand,
      category: "electronics"
    },
    {
      "id": 13,
      name: "Electric Kettle with Auto Shut-Off",
      price: 29.99,
      mrp: 39.99,
      discount: "25%",
      description:
        "A stainless steel electric kettle with a 1.7-liter capacity and auto shut-off feature. Boil water quickly and safely.",
      offers: {
        bankOffer: "Get $5 off on select credit cards.",
        partnerOffers: "Free shipping on orders over $40.",
      },
      warranty: "1 Year Warranty from date of purchase",
      features: [
        "1.7-liter capacity",
        "Auto shut-off feature for safety",
        "Fast boiling time",
      ],
      image: kettle,
      category: "kitchen appliances"
    },
    {
      "id": 14,
      name: "Smart Fitness Tracker",
      price: 49.99,
      mrp: 69.99,
      discount: "29%",
      description:
        "Track your steps, heart rate, and sleep patterns with this smart fitness tracker. Features a waterproof design and long battery life.",
      offers: {
        bankOffer: "Get 5% off on select credit cards.",
        partnerOffers: "Buy one, get one 20% off.",
      },
      warranty: "1 Year Warranty from date of purchase",
      features: [
        "Tracks steps, heart rate, and sleep",
        "Waterproof design",
        "Long battery life",
      ],
      image: fitness,
      category: "health and fitness"
    },
    {
      "id": 15,
      name: "Portable Bluetooth Speaker",
      price: 39.99,
      mrp: 59.99,
      discount: "33%",
      description:
        "Compact and powerful, this portable Bluetooth speaker delivers crystal-clear sound and deep bass. Perfect for outdoor activities and parties.",
      offers: {
        bankOffer: "Get $10 off on select credit cards.",
        partnerOffers: "Free shipping on orders over $50.",
      },
      warranty: "1 Year Warranty from date of purchase",
      features: [
        "Crystal-clear sound and deep bass",
        "Compact and portable",
        "Water-resistant for outdoor use",
      ],
      image: speaker,
      category: "electronics"
    },
    // {
    //   "id": 16,
    //   name: "Reversible Comforter Set",
    //   price: 69.99,
    //   mrp: 89.99,
    //   discount: "22%",
    //   description:
    //     "A soft, reversible comforter set with a cozy, plush feel. Includes matching pillowcases and is available in various colors.",
    //   offers: {
    //     bankOffer: "Get 5% off on select credit cards.",
    //     partnerOffers: "Free shipping on orders over $75.",
    //   },
    //   warranty: "No warranty",
    //   features: [
    //     "Reversible design for two looks",
    //     "Soft and plush material",
    //     "Available in various colors and sizes",
    //   ],
    //   image: comforter,
    //   category: "home appliances"
    // },
  ];
  

 export const data=[{
      "name": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "price": 19.99,
      "image": palette
    },
    {
      "name": "Bluetooth Wireless Headphones",
      "description": "Experience high-quality sound with these Bluetooth wireless headphones. Featuring noise-cancellation technology and up to 30 hours of battery life.",
      "price": 59.99,
      "image": bluetooth
    },
    {
      "name": "Ceramic Coffee Mug Set",
      "description": "A set of four durable ceramic coffee mugs with a minimalist design. Microwave and dishwasher safe, perfect for your morning coffee.",
      "price": 24.99,
      "image": coffee
    },
    {
      "name": "Stainless Steel Water Bottle",
      "description": "Keep your drinks cold for 24 hours or hot for 12 hours with this vacuum-insulated stainless steel water bottle. BPA-free and eco-friendly.",
      "price": 14.99,
      "image": bottle
    },
    {
      "name": "Wireless Gaming Mouse",
      "description": "A high-performance wireless gaming mouse with customizable RGB lighting and adjustable DPI settings. Perfect for both gaming and office work.",
      "price": 29.99,
      "image": mouse
    },
    {
      "name": "Yoga Mat with Carrying Strap",
      "description": "A non-slip yoga mat with a 6mm thickness for maximum comfort and support during your workouts. Includes a convenient carrying strap.",
      "price": 22.99,
      "image": yoga
    },
    {
      "name": "LED Desk Lamp with USB Charging Port",
      "description": "This modern LED desk lamp offers adjustable brightness and a USB charging port for convenience. Ideal for work or study spaces.",
      "price": 39.99,
      "image": led
    },
    {
      "name": "Instant Pot 7-in-1 Pressure Cooker",
      "description": "A 7-in-1 multifunctional pressure cooker that can slow cook, steam, sauté, and more. Save time and cook delicious meals effortlessly.",
      "price": 89.99,
      "image": pot
    },
    {
      "name": "Noise Cancelling Earbuds",
      "description": "Compact noise-cancelling earbuds with a sleek design and long battery life. Enjoy your favorite music anywhere, anytime.",
      "price": 49.99,
      "image": buds
    },
    {
      "name": "Digital Alarm Clock with Night Light",
      "description": "A digital alarm clock with a built-in night light and snooze function. The modern design fits any bedroom aesthetic.",
      "price": 17.99,
      "image": alarm
    },
    {
      "name": "Smartphone Camera Lens Kit",
      "description": "Enhance your smartphone photography with this lens kit, including wide-angle, macro, and fisheye lenses. Compatible with most smartphones.",
      "price": 34.99,
      "image": camera
    },
    {
      "name": "Foldable Laptop Stand",
      "description": "A lightweight and foldable laptop stand with adjustable angles for ergonomic typing and viewing. Suitable for laptops up to 15 inches.",
      "price": 25.99,
      "image": laptop_stand
    },
    {
      "name": "Electric Kettle with Auto Shut-Off",
      "description": "A stainless steel electric kettle with a 1.7-liter capacity and auto shut-off feature. Boil water quickly and safely.",
      "price": 29.99,
      "image": kettle
    },
    {
      "name": "Smart Fitness Tracker",
      "description": "Track your steps, heart rate, and sleep patterns with this smart fitness tracker. Features a waterproof design and long battery life.",
      "price": 49.99,
      "image": fitness
    },
    {
      "name": "Portable Bluetooth Speaker",
      "description": "Compact and powerful, this portable Bluetooth speaker delivers crystal-clear sound and deep bass. Perfect for parties or outdoor adventures.",
      "price": 39.99,
      "image": speaker
    }
  ]
  