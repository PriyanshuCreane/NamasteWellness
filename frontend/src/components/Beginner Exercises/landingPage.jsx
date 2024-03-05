import NavigationBar from "../Navigation";
import cartoonCharacter from "/cartoonCharacter.png";
import img1 from "/img1.png";
import img2 from "/img2.png";
import img6 from "/img6.png";
import character from "/character.png";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import ButtonQuestionnaire from "./buttonQuestionnaire";




const Week1Beginners = () => {
  
  return (
    <>
      <NavigationBar />
      <div className="w-full h-screen bg-[#FFE6CC] mb-28">
        <div className="flex flex-col">
          {/* Cartoon character photo */}
          <div className="flex flex-col items-center justify-center w-full">
            <img src={cartoonCharacter} alt=""
            className="h-[250px]  flex items-center justify-center"
            />  
          </div>
          {/* img1 leg exercise  */}
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="mr-36 w-48 h-52 pl-0 object-contain">
                <img src={img1} alt="img1" />
              </div>
            </div>
              {/* Center div Element  */}
            <div className=" mr-10 ml-10 p-6 pt-4 bg-gradient-to-b from-[#FDC98D] to-white flex justify-center border rounded-3xl w-[500px] h-[250px]">
              <div className="absolute flex flex-col justify-center items-center">
                <h1 className="text-3xl">
                  Personalized Fitness <br /> made for you <br /><br /><br></br>
                </h1>
                  <Link to="/questionnaire">
                    <button className="flex flex-col items-center justify-center bg-gradient-to-b from-[#FFAC49] to-white border rounded-2xl w-32 border-[#FFAC49] 
                    hover:-translate-y-1.5 hover:bg-[#FFE6CC] hover:-translate-z-3
                    "
                    // onClick={handleShowQuestionnaire}
                  >
                        Get Started
                    </button>
                </Link>
              </div>
            </div>
              {/* Standing leg exercise  */}
            <div className="flex flex-col items-center justify-center">
              <div className="pl-36 object-contain">
                <img src={img2} alt="img1" className="w-48 h-52"/>
              </div>
            </div>
          </div>
          {/* Hand Dumbel */}
          <div>
            <div className=" pb-10 mb-10 flex flex-col items-center justify-center mt-6">
              <img src={img6} alt="" className="w-48 h-52"/>
            </div>
          </div>
        </div>
      </div>
      {/* 1st page ends here  */}

      {/* Second page starts */}

      <div className="w-full h-[100vh] flex flex-row items-center justify-center">
        <div className="w-[50%] h-full bg-[#FFE6CC]">
          <div>
            <img
              // src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c0ab9d8c4e178ff091a8832533c2fdce201ea0a805d22159b2136583b4ffa85?apiKey=d99ea98b3ab740cf9ca0a1f5d82d2cd8&"
              src={character}
              alt="NamasteWellness Logo"
              className="w-[80%] h-[90%] m-12"
            />
          </div>
        </div>
        <div className="w-[50%] h-full bg-[#FFE6CC]">
          <h1
            className="flex ml-20 text-4xl w-96 m-28 p-2 bg-gradient-to-r from-purple-500 via-blue-600 to-green-500 bg-clip-text text-transparent"
          >
            No Gym? No Problem
          </h1>
          <div className="flex flex-col p-5 items-start bg-[#f8d6ac]  m-20 rounded-3xl">
            <h1 className="font-semibold text-xl">Introducing <br /></h1>
            <h1 className="font-bold text-5xl">Home Exercises<br /><br/></h1>
            <h1 className="font-semibold text-xl text-gray-500 flex items-start">No need for equipments, what you need is
              <br /> a STRONG WILL!!
            </h1>
          </div>
        </div>
      </div>
    </>
  )
};

export default Week1Beginners;