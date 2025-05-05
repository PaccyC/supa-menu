import { useState } from "react";
import Leftbar from "../components/Leftbar";
import { RootLayoutProps } from "../types";
import { IoMdMenu } from "react-icons/io";

const RootLayout = ({ children }: RootLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section className="w-full min-h-screen bg-black md:px-4">
      {/* Top mobile bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-black">
        <h1 className="text-white font-semibold text-xl">Supa<span className="text-orange">Menu</span></h1>
        <button onClick={() => setIsSidebarOpen(true)}>
          <IoMdMenu size={26} className="text-white cursor-pointer" />
        </button>
      </div>

      <div className="flex">
        {/* Mobile Sidebar */}
        <div className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 bg-black w-64 border-l  border-orange 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <Leftbar onClose={() => setIsSidebarOpen(false)} />
        </div>
        <div className="hidden lg:flex w-[15%]">
          <Leftbar />
        </div>

        <div className="flex-1 lg:w-[85%] bg-gray-100/85 min-h-screen px-4 py-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default RootLayout;
