import React from "react";

function Header() {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#FFD700]">
        Weather App
      </h1>
      <p className="text-[#B0B0B0] text-sm sm:text-base mt-1">
        Get real-time weather updates
      </p>
    </header>
  );
}

export default Header;
