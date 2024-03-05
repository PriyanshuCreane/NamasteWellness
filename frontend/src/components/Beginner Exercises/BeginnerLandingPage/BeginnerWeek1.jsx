import NavigationBar from "../../Navigation1"
import beginnerPerson from "../../../../public/beginnerPerson.jpg"
import { Link } from "react-router-dom"
function BeginnerWeek1() {
  return (
    <div className="flex flex-col overflow-y-hidden">
        <NavigationBar />
          <div className="w-full flex text-xl">
              <div style={{fontFamily:"Puppies Play"}} className="text-7xl font-bold w-full flex justify-center items-center">
                  Weekly Challenge
              </div>
          </div>
          <div className="w-full flex flex-row">
              
              {/* Left part of beginnerlandingpage */}
              <div className="flex flex-row w-[50%]">
                  <div  className="absolute w-[50%] text-3xl flex  pt-20">
                        <div style={{fontFamily:"Risque"}} className="flex flex-col w-full">
                        <h2 className="flex justify-center">IT's time to</h2> <h3 className="flex justify-center"><br/>get fit</h3>
                        </div> 
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-28">
                      <div style={{fontFamily:"Puppies Play"}} className="text-5xl font-bold">
                          Week 1
                      </div>
                      <div className="w-full flex flex-col">
                          <div className="flex flex-row justify-between pl-10 pr-10 pt-10 ml-10 mr-10 mt-10  ">
                              <div style={{fontFamily:"Puppies Play"}} className=" bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl ">
                                <Link to='/beginnerday1'>
                                  <button className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 1
                                  </button>
                                </Link>
                              </div>
                              <div style={{fontFamily:"Puppies Play"}} className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                <Link to='/beginnerDay2'>
                                 <button className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 2
                                  </button>
                                  </Link>
                              </div>
                              <div style={{fontFamily:"Puppies Play"}} className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 3
                                  </button>
                              </div>
                          </div>
                          <div className="flex flex-row justify-between pl-10 pr-10 pt-10 ml-10 mr-10 mt-10">
                              <div style={{fontFamily:"Puppies Play"}} className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 4
                                  </button>
                              </div>
                              <div style={{fontFamily:"Puppies Play"}} className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 5
                                  </button>
                              </div>
                              <div style={{fontFamily:"Puppies Play"}} className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 6
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* 3d element page  */}
              <div className="w-[50%] h-screen flex flex-row">
                  <img src={beginnerPerson} alt="person"
                  className="w-[80%] h-[80%] pt-5 p-5 ml-5 mt-5"
                  />
              </div>
          </div>
    </div>
  )
}

export default BeginnerWeek1