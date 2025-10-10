import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import CurrentWeather from './Components/CurrentWeather'
import Forecast from './Components/Forecast'

function App() {
 
  return (
    <>
     <div className="min-h-screen bg-[#121212] text-[#E0E0E0] flex flex-col items-center p-4">
      <Header />
      <SearchBar />
      <CurrentWeather />
      <Forecast />
    </div>
    </>
  )
}

export default App
