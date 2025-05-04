import CustomButton from "../../components/CustomButton"
import AuthLayout from "../../layout/AuthLayout"

const Register = () => {
  return (
    <AuthLayout>
      <div className="h-auto sm:min-w-[450px] bg-white py-4 px-6 rounded-lg">
        <div className="w-full flex justify-center">
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex flex-col gap-6">
            <p className="text-black font-semibold text-center text-xl">Signup</p>
           


            </div>

            {/* Form */}
            <form className="w-full flex flex-col gap-8">
              <div className="w-full flex flex-col gap-5">

              <div className="flex flex-col gap-1 items-start">
                <p className="text-gray-400 text-[12px] font-medium">FIRST NAME</p>
                <input type="text" name="first_name" className="w-full px-2 py-2  bg-gray-100/30 rounded-lg border-[1px] border-gray-400 focus:outline-0 text-sm" placeholder="First name"/>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <p className="text-gray-400 text-[12px] font-medium">LAST NAME</p>
                <input type="text" name="last_name" className="w-full px-2 py-2  bg-gray-100/30 rounded-lg border-[1px] border-gray-400 focus:outline-0 text-sm" placeholder="Last name"/>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <p className="text-gray-400 text-[12px] font-medium">PHONE</p>
                <input type="tel" name="phone" className="w-full px-2 py-2  bg-gray-100/30 rounded-lg border-[1px] border-gray-400 focus:outline-0 text-sm"/>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <p className="text-gray-400 text-[12px] font-medium">EMAIL</p>
                <input type="email" name="email" className="w-full px-2 py-2  bg-gray-100/30 rounded-lg border-[1px] border-gray-400 focus:outline-0 text-sm" placeholder="Email address"/>
              </div>
              <div className="flex flex-col gap-1 items-start">
                 <p className="text-gray-400 text-[12px] font-medium">PASSWORD</p>
                <input type="password" name="password" className="w-full px-2 py-2  bg-gray-100/30 rounded-lg border-[1px] border-gray-400 focus:outline-0 text-sm" placeholder="Password"/>
              </div>

              <CustomButton text="Sign Up" onClick={()=>{}} containerStyle="w-full bg-orange" textStyle="text-white text-[12px] font-medium"/>
              </div>
              <p className="text-sm text-gray-400 text-center">Already have an account? <span className="cursor-pointer text-blue-600 font-medium">Login</span></p>
            </form>
            
          </div>
          

        </div>
      </div>
    </AuthLayout>
  )
}

export default Register
