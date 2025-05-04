import CustomButton from "../components/CustomButton"
import RegistrationStep from "../components/RegistrationStep"
import { data } from "../constants"
const Home = () => {
  return (
    <div className="w-full h-screen bg-black">
      <div className="bg-inherit w-full lg:px-8 py-6 h-[50%]">
        <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full flex items-start justify-between">
          <div className="py-6 px-8">
            <h2 className="text-white text-5xl font-semibold">Supa<span className="text-orange">Menu</span></h2>
          </div>
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

        <div className="w-full flex flex-row justify-center">
          <div className=" flex flex-col gap-4">
          <h3 className="text-white font-normal">
            <span className="text-3xl font-semibold">Register your Restaurant on Supamenu</span>
            <br/>
            for free and get more revenue !
          </h3>

        <div className="flex items-center gap-4">
          <CustomButton  
        text="Register your Restaurant" 
        onClick={()=>{}} 
        containerStyle="bg-orange"
        textStyle="text-white"
        />
        <CustomButton  
        text="Restaurant already registered?Signin" 
        onClick={()=>{}} 
        containerStyle="bg-transparent border-[1px] border-white"
        textStyle="text-white"
        />
            
          </div>
          </div>
         
        </div>
        </div>
      </div>
      <div className="bg-white w-full h-[50%] pt-6 pb-3">
        <div className="w-full h-full flex flex-col justify-between items-center">
          <h3 className="text-black text-2xl font-semibold">How It Works</h3>

          <div className="w-full px-4 lg:pl-32 lg:pr-24 grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-between items-center">
            {data.registrationSteps.map((step)=>(
              <RegistrationStep key={step.id} title={step.title} id={step.id} icon={step.icons}/>
            ))}
          </div>


          
        </div>
      
      </div>
    </div>
  )
}

export default Home
