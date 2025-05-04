import { useState } from "react"
import RootLayout from "../layout/RootLayout"
import { data } from "../constants";
import { FaChevronRight,FaChevronLeft  } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { FaFilter } from "react-icons/fa";



const Clients = () => {
  const[isModalVisible,setIsModalVisible]= useState(false);

  const handleToggleOpenAndCloseModal= ()=>{
    setIsModalVisible((prev)=>!prev)
  }
  return (
    <RootLayout>
      <div className="flex-1">
        <div className="w-full flex flex-col gap-10 px-4 py-6">
          <div className="w-full flex items-center justify-between">
            <h4 className="text-2xl text-black">Overview</h4>

            <div className="flex gap-4 items-center">
                        <img className="cursor-pointer h-[16px] w-[16px] object-contain" src={data.icons.searchIcon} alt="Search Icon" />
                        <img className="cursor-pointer h-[16px] w-[16px] object-contain" src={data.icons.searchIcon} alt="Search Icon" />
                        <div className="w-[1.5px] lg:h-[30px] bg-gray-400 rounded-full"/>
                        <div className="flex items-center gap-2">
                          <p className="text-white text-sm font-medium cursor-pointer">Jaques Kagabo</p>
                          <img 
                          src={data.images.person1} 
                          alt="Profile image"
                          className="h-6 w-6 object-contain rounded-full"
                          />
                        </div>
                      </div>
          </div>

          {/* Adding client and clients list */}
          <div className="w-full flex justify-center  flex-col gap-4">
            <div className="w-full flex flex-col gap-2 items-center">
              <p className="text-2xl font-semibold text-black">New Client</p>
              <div className="w-[50%] flex flex-col gap-2 items-center">
                <div className="w-full flex items-start justify-between px-3">
                  <p className="text-gray-400">Add a new client</p>
                  <div className="px-2 bg-gray-400 flex items-center justify-center cursor-pointer">
                  <p className=" text-gray-500 text-xl">+</p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-500"/>
              </div>
            </div>

            {/* Clients table */}
            <div className="w-full h-auto bg-white py-5 rounded-lg flex flex-col gap-4">
              <div className="w-full flex items-center justify-between px-6">
                <p className="text-sm font-medium">All Clients</p>
                <div className="flex gap-3 items-center">
                  <div className="flex items-center gap-1 cursor-pointer">

                  <p className="text-xs text-gray-600 font-medium">Sort</p>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <FaFilter fill="#4a5565" size={10}/>
                  <p className="text-xs text-gray-600 font-medium">Filter</p>
                  </div>
                </div>
              </div>

              <table className="w-full">
                <thead className="w-full flex items-center justify-start px-10 py-2 border-b-[1.5px] border-gray-400">
                  <th className="flex-3 text-start">Client Details</th>
                  <th className="flex-2 text-start">Sales</th>
                  <th className="flex-1 text-start">Daily report</th>
                  <th className="flex-1 text-start">Category</th>
                </thead>
                <tbody className="">
                  {data.clients.map((client)=>(
                    <tr className="w-full  flex items-center justify-start px-10 py-2 border-b-[1.5px] border-gray-400">
                      <td className="text-start flex-3">
                      <div className="block">
                          <p className="text-start">{client.name}</p>
                          <p className="text-start text-xs text-gray-500">Updated 1 day ago</p>
                        </div>
                      </td>
                      <td className=" text-start flex-2">
                        <div className="block">
                          <p className="text-start">{client.sales} Frw</p>
                          <p className="text-start text-xs text-gray-500">on 24.05.2019</p>
                        </div>
                      </td>
                      <td className="flex-1">
                        <div className="w-full flex items-center justify-center">
                        <IoMdEye fill="#FF741C"/>
                        </div>
                        </td>
                      <td className="text-start flex-1">
                       <div className="flex  items-center justify-between">
                        <div className="bg-zinc-400 rounded-full px-2 py-1 cursor-pointer">
                          <p className="text-xs text-white">RESTO</p>
                        </div>
                        <p className="text-zinc-400 text-lg cursor-pointer">...</p>
                       </div>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>

              <div className=" mt-10 lg:mt-20 flex items-center justify-end px-6">
                <div className="flex items-center gap-12">
                  <div className="flex items-center gap-3">
                    <p className="text-gray-500 text-sm">Rows per page:</p>
                    <p className="text-gray-500 text-sm">6</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-gray-500 text-sm">1-6 of 12</p>
                    <div className="flex items-center gap-2">
                      <FaChevronLeft fill="#6a7282" size={12} className="cursor-pointer"/>
                      <FaChevronRight fill="#6a7282" size={12} className="cursor-pointer"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </RootLayout>
  )
}

export default Clients
