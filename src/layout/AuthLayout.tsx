import { AuthLayoutProps } from "../types"



const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <section className="w-full h-screen bg-black px-4">
      <div className="w-full h-full flex bg-orange px-4">
      <div className="hidden lg:flex-1/2 bg-inherit lg:flex justify-center items-center">
      <h2 className="text-black text-5xl font-semibold">Supa<span className="text-white">Menu</span></h2>
      </div>
      <div className=" flex-1 lg:flex-1/2 flex justify-center lg:justify-start items-center bg-orange/80">
      {children}
      </div>
      
      </div>

    </section>
  )
}

export default AuthLayout
