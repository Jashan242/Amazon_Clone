import { useState } from 'react';
import Sidebar from './Sidebar';


export default function CategoryFilter() {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="bg-[#232f3e] category-filter">
        <div className="flex items-center gap-2 text-white 
          overflow-x-auto whitespace-nowrap">
        <button 
          onClick={()=>{setIsSidebarOpen(true); console.log("Toggle Open Side Bar")}}
          className="flex items-center gap-1 hover:bg-[#3a4553] px-2 py-1 rounded hover:cursor-pointer"
        >
          <span className="text-sm">☰ All</span>
         
        </button>
      </div>
      <Sidebar open={isSidebarOpen} onClose={()=>setIsSidebarOpen(false)} />
    </div>
  )
}
