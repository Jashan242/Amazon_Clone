import air_conditioner from '../assets/air_conditioner.jpg';
import refri from '../assets/refri.jpg';
import microwave from '../assets/microwave.jpg';
import washing from '../assets/washing.jpg';
import ethnic from '../assets/ethnic.jpg';
import decor from '../assets/decor.jpg';
import fashion from '../assets/fashion.jpg';
import glassware from '../assets/glassware.jpg';
import cushion from '../assets/cushion.jpg';
import vase from '../assets/vase.jpg';
import home from '../assets/home.jpg';
import lighting from '../assets/lighting.jpg';
import boat from '../assets/boat.jpg';
import boult from '../assets/boult.jpg';
import noise from '../assets/noise.jpg';
import zebronics from '../assets/zebronics.jpg';
import cleaning from '../assets/cleaning.jpg';
import tyre from '../assets/tyre.jpg';
import helmet from '../assets/helmet.jpg';
import vacuum from '../assets/vacuum.jpg';
import bedsheet from '../assets/bedsheet.jpg';
import curtain from '../assets/curtain.jpg';
import iron from '../assets/iron.jpg';
import home_decor from '../assets/home_decor.jpg';
import soft_toys from '../assets/soft_toys.jpg';
import indoor_games from '../assets/indoor_games.jpg';
import ride from '../assets/ride.jpg';
import outdoor from '../assets/outdoor.jpg';

export default function Card() {
  return (
    <div className="absolute top-[650px] left-0 right-0 z-10">
      <div className="w-full max-w-[1500px] mx-auto px-4">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {data.map((item) => (
            <div className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow' key={item.title}>
              <h3 className='text-xl font-bold mb-4'>{item.title}</h3>
              <div className='grid grid-cols-2 gap-3'>
                {item.items.slice(0, 4).map((element) => (
                  <div key={element.title} className='relative'>
                    <img 
                      className='w-full aspect-square object-cover rounded-sm' 
                      src={element.image} 
                      alt={element.title}
                    />
                    <p className='text-xs mt-1'>{element.title}</p>
                  </div>
                ))}
              </div>
              <a 
                className="text-[#007185] text-sm hover:text-[#c7511f] hover:underline" 
                href={item.redirect.url}
              >
                {item.redirect.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


const data=[{
    title:"Appliances for your home | Up to 55% off",
    items:[
        {
            image:air_conditioner,
            title:"Air Conditioner"
        },
        {
            image:refri,
            title:"Refrigerators"
        },
        {
            image:microwave,
            title:"Microwaves"
        },
        {
            image:washing,
            title:"Washing Machine"
        },
    ],

    redirect:{
        label:"See more",
        url:"https://google.com"
    },
},

{
  title:"Explore more from Small Business",
  items:[
      {
          image:ethnic,
          title:"Ethnic, dresses & more"
      },
      {
          image:decor,
          title:"Decor"
      },
      {
          image:fashion,
          title:"Fashion accessories"
      },
      {
          image:glassware,
          title:"Glassware & drinkware"
      },
  ],

  redirect:{
      label:"See more",
      url:"https://google.com"
  },
},
{
  title:"Rewamp your home in style",
  items:[
      {
          image:cushion,
          title:"Cushion covers, bedsheets & more"
      },
      {
          image:vase,
          title:"Figurines, vases & more"
      },
      {
          image:home,
          title:"Home Storage"
      },
      {
          image:lighting,
          title:"Lighting solutions"
      },
  ],

  redirect:{
      label:"See more",
      url:"https://google.com"
  },
},
{
  title:"Starting ₹149 | Headphones",
  items:[
      {
          image:boat,
          title:"Starting ₹249 | boAt"
      },
      {
          image:boult,
          title:"Starting ₹349 | boult"
      },
      {
          image:noise,
          title:"Starting ₹649 | Noise"
      },
      {
          image:zebronics,
          title:"Starting ₹149 | Zebronics"
      },
  ],

  redirect:{
      label:"See more",
      url:"https://google.com"
  },
},
{
  title:"Automotive essentials | Up to 60% off",
  items:[
      {
          image:cleaning,
          title:"Cleaning accessories"
      },
      {
          image:tyre,
          title:"Tyre & rim care"
      },
      {
          image:helmet,
          title:"Helmets"
      },
      {
          image:vacuum,
          title:"Vacuum cleaner"
      },
  ],

  redirect:{
      label:"See more",
      url:"https://google.com"
  },
},
{
  title:"Starting ₹199 | Amazon Brands & more",
  items:[
      {
          image:bedsheet,
          title:"Starting ₹199 | Bedsheets"
      },
      {
          image:curtain,
          title:"Starting ₹199 | Curtains"
      },
      {
          image:iron,
          title:"Minimum 40% off | Ironing board & more"
      },
      {
          image:home_decor,
          title:"Upp to 60% off | Home decor"
      },
  ],

  redirect:{
      label:"See more",
      url:"https://google.com"
  },
},
{
  title:"Min. 40% off | Fun toys & games | Amazon brands",
  items:[
      {
          image:soft_toys,
          title:"Min. 40% off | soft toys"
      },
      {
            image:indoor_games,    
            title:"Min. 40% off | Indoor games"
      },
      {
          image:ride,
          title:"Min. 40% off | Ride ons"
      },
      {
          image:outdoor,
          title:"Min. 40% off | outdoor games"
      },
  ],

  redirect:{
      label:"See more",
      url:"https://google.com"
  },
},
{
  title:"Appliances for your home | Up to 55% off",
  items:[
      {
          image:air_conditioner,
          title:"Air Conditioner"
      },
      {
          image:refri,
          title:"Refrigerator"
      },
      {
          image:washing,
          title:"Washing Machine"
      },
      {
          image:microwave,
          title:"Microwaves"
      },
  ],

  redirect:{
      label:"See more",
      url:"https://google.com"
  },
}

]
