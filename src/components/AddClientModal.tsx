import CustomButton from "./CustomButton";

interface AddClientModalProps {
  onClose: () => void;
}
const AddClientModal = ({ onClose }: AddClientModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
       <div className="absolute inset-0 bg-black opacity-70" onClick={onClose}></div>
      <div className="relative h-auto sm:min-w-[450px] bg-white px-6 rounded-lg pb-4 z-60">
        <div className="w-full flex justify-end pt-3">
          <button
            onClick={onClose}
            className="text-gray-600 text-lg font-bold cursor-pointer"
          >
            X
          </button>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex flex-col gap-6">
              <p className="text-black font-semibold text-center text-xl">
                Client
              </p>
            </div>

            {/* Form */}
            <form className="w-full flex flex-col gap-8">
              <div className="w-full flex flex-col gap-5">
                <div className="w-full mb-4 wrapper">
                  <div className="h-[40px] w-full relative input-data">
                    <input
                      className="h-full w-full  border-b-2 border-[#E8ECEF] focus:border-[#E8ECEF] focus:outline-none placeholder-transparent text-[#6C7275]"
                      required
                      placeholder="Client name"
                    />
                    <div className="underline"></div>
                    <label className="text-[#6C7275] absolute bottom-2.5 left-0 pointer-events-none">
                      Client
                    </label>
                  </div>
                </div>

                <div className="w-full mb-4 wrapper">
                  <div className="h-[40px] w-full relative input-data">
                    <input
                      className="h-full w-full  border-b-2 border-[#E8ECEF] focus:border-[#E8ECEF] focus:outline-none  text-[#6C7275]"
                      required
                      // placeholder="Client name"
                    />
                    <div className="underline"/>
                    <label className="text-[#6C7275] absolute bottom-2.5 left-0 pointer-events-none">
                      Category
                    </label>
                  </div>
                </div>

                <div className="w-full mb-4 wrapper">
                  <div className="h-[40px] w-full relative input-data">
                    <input
                      className="h-full w-full  border-b-2 border-[#E8ECEF] focus:border-[#E8ECEF] focus:outline-none placeholder-transparent text-[#6C7275]"
                      required
                      placeholder="Client name"
                    />
                    <div className="underline"/>
                    <label className="text-[#6C7275] absolute bottom-2 left-0 pointer-events-none">
                      Representative
                    </label>
                  </div>
                </div>

                <div className="w-full mb-4 wrapper">
                  <div className="h-[40px] w-full relative input-data">
                    <input
                      className="h-full w-full  border-b-2 border-[#E8ECEF] focus:border-[#E8ECEF] focus:outline-none placeholder-transparent text-[#6C7275]"
                      required
                      placeholder="Client name"
                    />
                    <div className="underline"/>
                    <label className="text-[#6C7275] absolute bottom-2.5 left-0 pointer-events-none">
                      Date of Creation
                    </label>
                  </div>
                </div>

                <div className="w-full mb-4 wrapper">
                  <div className="h-[40px] w-full relative input-data">
                    <input
                      className="h-full w-full  border-b-2 border-[#E8ECEF] focus:border-[#E8ECEF] focus:outline-none placeholder-transparent text-[#6C7275]"
                      required
                      placeholder="Client name"
                    />
                    <div className="underline"/>
                    <label className="text-[#6C7275] absolute bottom-2.5 left-0 pointer-events-none">
                      Address
                    </label>
                  </div>
                </div>
                <div className="w-full mb-4 wrapper">
                  <div className="h-[40px] w-full relative input-data">
                    <input
                      className="h-full w-full  border-b-2 border-[#E8ECEF] focus:border-[#E8ECEF] focus:outline-none placeholder-transparent text-[#6C7275]"
                      required
                      placeholder="Client name"
                    />
                    <div className="underline"/>
                    <label className="text-[#6C7275] absolute bottom-2.5 left-0 pointer-events-none">
                      Email
                    </label>
                  </div>
                </div>
                <CustomButton
                  text="Add Client"
                  onClick={() => {}}
                  containerStyle="bg-orange"
                  textStyle="text-white text-[12px] font-medium"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClientModal;
