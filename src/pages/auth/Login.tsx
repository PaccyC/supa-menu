import CustomButton from "../../components/CustomButton"
import AuthLayout from "../../layout/AuthLayout"

const Login = () => {
  return (
    <AuthLayout>
      <div className="h-auto sm:min-w-[450px] bg-white pt-16 pb-4 px-6 rounded-lg">
        <div className="w-full flex justify-center">
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex flex-col gap-6">
            <p className="text-gray-400 font-medium text-center">Welcome</p>
            <div className="w-full flex flex-col gap-2 items-center">
              <h3 className="text-black font-semibold text-2xl">Login to Supamenu</h3>
              <p className="text-gray-400 text-center font-normal">Enter your email and password below</p>

            </div>


            </div>

            {/* Form */}
            <form className="w-full flex flex-col gap-8">
              <div className="w-full flex flex-col gap-5">

              <div className="flex flex-col gap-1 items-start">
                <p className="text-gray-400 text-[16px] font-medium">Email</p>
                <input type="email" name="email" className="w-full px-2 py-2  bg-gray-100/30 rounded-lg border-[1px] border-gray-400 focus:outline-0" placeholder="Email address"/>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="w-full flex justify-between items-center">
                 <p className="text-gray-400 text-[16px] font-medium">Password</p>
                 <p className="cursor-pointer text-gray-400 text-xs lg:text-sm font-medium">Forgot password?</p>
                </div>
                <input type="password" name="password" className="w-full px-2 py-2  bg-gray-100/30 rounded-lg border-[1px] border-gray-400 focus:outline-0" placeholder="Password"/>
              </div>

              <CustomButton text="Log In" onClick={()=>{}} containerStyle="w-full bg-orange" textStyle="text-white text-[12px] font-medium"/>
              </div>
              <p className="text-sm text-gray-400 text-center">Don't have an account? <span className="cursor-pointer text-blue-600 font-medium">Sign up</span></p>
            </form>
            
          </div>
          

        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
