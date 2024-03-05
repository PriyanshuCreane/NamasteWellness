import NavigationBar from "../../Navigation1"
import beginnerPerson3 from "../../../../public/beginnerPerson3.png"
function BeginnerWeek3() {
  return (
    <div className="flex flex-col">
        <NavigationBar />
          <div className="w-full flex">
              <div style={{fontFamily:"Puppies Play"}} className="text-7xl font-bold w-full flex justify-center Soreness is progress! ">
                  Weekly Challenge
              </div>
          </div>
          <div className="w-full flex flex-row">
              
              {/* Left part of beginnerlandingpage */}
              <div style={{fontFamily:"Risque"}} className="flex  w-[50%] h-screen">
                  <div className="absolute w-[50%] text-3xl  flex flex-col justify-center pt-20">
                  <h2 className="flex justify-center">Challenge yourself a bitmore this week</h2> <h3 className="flex justify-center">Soreness is progress! </h3>  
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-28">
                      <div style={{fontFamily:"Puppies Play"}} className="text-5xl font-bold">
                          Week 3
                      </div>
                      <div className="w-full flex flex-col">
                          <div className="flex flex-row justify-between pl-10 pr-10 pt-10 ml-10 mr-10 mt-10  ">
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl ">
                                  <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 15
                                  </button>
                                  
                              </div>
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 16
                                  </button>
                              </div>
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 17
                                  </button>
                              </div>
                          </div>
                          <div className="flex flex-row justify-between pl-10 pr-10 pt-10 ml-10 mr-10 mt-10">
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 18
                                  </button>
                              </div>
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 19
                                  </button>
                              </div>
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 20
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* 3d element page  */}
              <div className="w-[50%] h-screenflex flex-row">
                  <img src={beginnerPerson3} alt="person"
                  className="w-[80%] h-[90%] p-5 ml-5 mt-5"
                  />
              </div>
          </div>
    </div>
  )
}

export default BeginnerWeek3;