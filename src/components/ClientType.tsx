import { ClientTypeProps } from "../types"

const ClientType = ({title,children}:ClientTypeProps) => {
  return (
    <div className="flex-1 py-4  shadow-md bg-white rounded-lg">
        <div className="w-full h-full gap-5 flex flex-col items-start ">
            <div className="w-full flex flex-col gap-2 px-4">
                <div className="w-full flex justify-between items-center">
                    <p className="text-lg font-semibold text-black">{title}</p>
                    <p className="text-orange/80 text-xs md:text-sm cursor-pointer">View details</p>
                </div>
                <p className="text-gray-500  text-xs md:text-sm font-light">Sales</p>
            </div>
            {children}
        </div>
    </div>
  )
}

export default ClientType
