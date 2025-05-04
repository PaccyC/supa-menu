import { RegistrationStepProps } from "../types"

const RegistrationStep = ({
id,
icon,
title
}:RegistrationStepProps) => {
  return (
    <div className="bg-white rounded-lg lg:w-[300px] lg:h-[200px] shadow-md px-6 pt-4 pb-8">
        <div className="w-full flex flex-col items-center gap-3">
         <img src={icon} alt="Icon here" />
         <div className="flex flex-col gap-2 items-center">
            <h4  className="text-black font-medium text-xl">Step {id}</h4>
            <p className="text-lg font-light text-center">{title}</p>
         </div>
        </div>
      
    </div>
  )
}

export default RegistrationStep
