// import React from "react";
import { Link } from "react-router-dom";
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
      <div className="flex gap-5 justify-between mx-2 my-auto text-lg leading-6">
        <Link to='/login'>
          <button className="my-4 font-medium text-stone-500 hover:text-stone-800 hover:-translate-y-1.5 hover:transition-transform hover:transition-duration:250ms focus:outline-none focus:ring focus:ring-orange-500 rounded">
            Login
          </button>
        </Link> 
        <Link to='/signup'>
          <button className="grow justify-center px-5 py-3.5 font-semibold text-center text-white bg-orange-400 rounded-full 
          hover:transition-transform hover:transition-duration:350ms
          focus:outline-none focus:ring focus:ring-orange-500 hover:-translate-z-3 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600">
            Sign up
          </button>
        </Link>  
      </div>
    </header>
  </div>
  );
}


export default NavigationBar;
