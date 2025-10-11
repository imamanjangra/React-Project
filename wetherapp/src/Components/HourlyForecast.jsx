
import ForecasteHook from "../1Hooks/ForecateHook";


function HourlyForecast() {
  const Api_Forcast_data = ForecasteHook();
  console.log(Api_Forcast_data);

  const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold text-[#FFD700] mb-3">
        Hourly Forecast
      </h3>

      <div className="flex gap-4 overflow-x-auto scrollbar-dark">
        {hours.map((no) => (
          <div
            key={no}
            className="flex flex-col items-center bg-[#2C2C2C] p-3 rounded-lg min-w-[70px] flex-shrink-0"
          >
            <p className="text-[#B0B0B0]">{new Date(Api_Forcast_data.list?.[no]?.dt *1000).toLocaleTimeString()}</p>

            <div className="my-2">
              {Api_Forcast_data.list?.[no]?.weather?.[0]?.main === "Clear" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-brightness-high-fill text-yellow-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cloud-fill text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
                </svg>
              )}
            </div>

            <p className="text-white text-sm">
              {(Api_Forcast_data.list?.[no]?.main.temp - 273.15).toFixed(0) + "°C"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
