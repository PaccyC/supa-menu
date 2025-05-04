import { useState } from "react";
import { data } from "../constants"
import { Link } from "react-router-dom";

const Leftbar = () => {

    const [isActive,setIsActive]=useState("Overview");

    const firstLinks= data.navbarLinks.filter((link)=> link.id <= 7 );
    const lastTwoLinks= data.navbarLinks.filter((link)=> link.id >7 );

  return (
    <div className="h-full w-full pt-8 border-l-[1px] border-l-orange flex flex-col gap-0">
        <div className="w-full h-[90%] flex flex-col justify-between">
        <div className="w-full flex flex-col gap-6">
            <div className="w-full pl-3">
            <h2 className="text-orange text-3xl font-semibold">Supa<span className="text-white">Menu</span></h2>
            </div>
            
            <div className="w-full flex flex-col gap-2">
            {firstLinks.map((link)=>(
                <Link 
                key={link.id} 
                to={link.route} 
                onClick={()=>setIsActive(link.title)}
                className={`relative cursor-pointer w-full pl-4 ${isActive === link.title ? "bg-zinc-900": "bg-black"}`}>
                    <div className="w-full  py-2 flex gap-3 items-center justify-start">
                        {/* Icon here */}
                    <p className={` text-sm ${isActive === link.title ? "text-white":"text-gray-400"}`}>{link.title}</p>
                    </div>
                    <div className={`${isActive == link.title ? "absolute left-0 top-0 h-full w-[2px] bg-white z-40":"hidden"}`}/>
                </Link>
            ))}
            </div>
        </div>
        


        <div className="w-full py-4 border-t-[1px] border-t-gray-400 flex flex-col gap-2">
            {lastTwoLinks.map((link)=>(
                <Link to={link.route} className=" cursor-pointer w-full pl-4 py-2">
                    <div className="w-full flex gap-3 items-center justify-start">
                        {/* Icon here */}
                    <p className="text-gray-400 text-sm">{link.title}</p>

                    </div>
                </Link>
            ))}
        </div>

        

        </div>
        <div className="w-full h-[10%] bg-orange"/>
        
      
    </div>
  )
}

export default Leftbar
