import { data } from "../constants"
import ClientType from "../components/ClientType"
import RootLayout from "../layout/RootLayout"

const Overview = () => {
  return (
    <RootLayout>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.clientTypes.map((client) => (
              <ClientType 
                key={client.id} 
                title={client.title}
              >
                <div className="w-full flex flex-col">
                  {client.entities.map((entity, index) => {
                    const isLastIndex = index === client.entities.length - 1;

                    return (
                      <div
                        key={entity.id}
                        className={`w-full flex items-center justify-between px-4 ${
                          isLastIndex
                            ? "border-none pt-2"
                            : "border-b-gray-500 border-b-[1px] py-2"
                        }`}
                      >
                        <p>{entity.name}</p>
                        <p>{entity.sales}</p>
                      </div>
                    );
                  })}
                </div>
              </ClientType>
            ))}
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-800 font-medium">Additional content</p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Overview;
