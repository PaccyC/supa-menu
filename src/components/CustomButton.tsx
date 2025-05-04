import { CustomButtonProps } from "../types"

const CustomButton = ({
    onClick,
    text,
    textStyle="text-white",
    containerStyle
}:CustomButtonProps) => {
  return (
    <button onClick={onClick} className={`py-3 px-8 rounded-lg cursor-pointer ${containerStyle}`}>
      <p className={`text-xs font-medium ${textStyle}`}>{text}</p>
    </button>
  )
}

export default CustomButton
