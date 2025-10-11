import React from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import HourlyForecast from "./Components/HourlyForecast";
import WeatherDetails from "./Components/WeatherDetails";
import SunInfo from "./Components/SunInfo";


import Favorites from "./Components/Favorites";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] flex flex-col items-center p-6">
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 mt-6">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          <SearchBar />
          <CurrentWeather />
          <HourlyForecast />
         
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <WeatherDetails />
          <SunInfo />
         
          
          <Favorites />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
