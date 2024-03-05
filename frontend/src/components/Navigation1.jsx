// import React from "react";
// import { Link } from "react-router-dom";
import character from "/character.png"
function NavigationBar() {
return (
  <div className="w-full rounded-xl">
    <header className="w-full flex justify-between bg-white sm:flex-wrap">
      <nav className="flex gap-8 justify-between text-6xl leading-6 text-center text-black sm:text-4xl">
        <img
          src={character}
          alt="NamasteWellness Logo"
          className="aspect-[0.93] w-[75px]"
        />
        <h1 className="grow pt-5 sm:text-4xl bg-gradient-to-r from-purple-500 via-blue-600 to-green-500 bg-clip-text text-transparent hover:transition-colors hover:transition-duration: 20000ms hover:bg-gradient-to-l hover:from-purple-500 hover:via-blue-600 hover:to-green-500">
          NamasteWellness
        </h1>
      </nav>
      
    </header>
  </div>
  );
}


export default NavigationBar;