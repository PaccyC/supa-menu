import Leftbar from "../components/Leftbar"
import { RootLayoutProps } from "../types"

const RootLayout = ({children}:RootLayoutProps) => {
  return (
    <section className="w-full min-h-screen bg-black px-3">
      <div className="h-full flex-1 flex">
        <div className="hidden lg:flex w-[15%]">
          <Leftbar/>
        </div>
        <div className="flex-1 lg:w-[85%] bg-gray-100/85">
        {children}
        </div>
      </div> 

    </section>
  )
}

export default RootLayout
