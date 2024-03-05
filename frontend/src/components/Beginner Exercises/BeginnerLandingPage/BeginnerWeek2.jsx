import NavigationBar from "../../Navigation1"
import beginnerPerson2 from "../../../../public/beginnerPerson2.jpg"
function BeginnerWeek2() {
  return (
    <div className="flex flex-col">
        <NavigationBar />
          <div className="w-full flex">
              <div style={{fontFamily:"Puppies Play"}} className="text-7xl font-bold w-full flex justify-center items-center">
                  Weekly Challenge
              </div>
          </div>
          <div className="w-full flex flex-row">
              
              {/* Left part of beginnerlandingpage */}
              <div style={{fontFamily:"Risque"}} className="flex  w-[50%] h-screen">
                  <div className="absolute w-[50%] text-3xl flex flex-col  items-center pt-20">
                  <h2 className="flex justify-center">Progress over perfection!</h2><h3 className="flex justify-center">Celebrate</h3> <h4 className="flex justify-center"> your small wins</h4> 
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-28">
                      <div style={{fontFamily:"Puppies Play"}} className="text-5xl font-bold">
                          Week 2
                      </div>
                      <div className="w-full flex flex-col">
                          <div className="flex flex-row justify-between pl-10 pr-10 pt-10 ml-10 mr-10 mt-10  ">
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl ">
                                  <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 8
                                  </button>
                                  
                              </div>
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 9
                                  </button>
                              </div>
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 10
                                  </button>
                              </div>
                          </div>
                          <div className="flex flex-row justify-between pl-10 pr-10 pt-10 ml-10 mr-10 mt-10">
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 11
                                  </button>
                              </div>
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 12
                                  </button>
                              </div>
                              <div className="bg-gray-400 border border-black flex justify-start items-start pr-8 rounded-xl">
                                 <button style={{fontFamily:"Puppies Play"}} className="w-20 text-3xl pr-2 pt-1 pb-1 pl-1 bg-white border border-black rounded-lg flex justify-start items-start">
                                      Day 13
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* 3d element page  */}
              <div className="w-[50%] h-screenflex flex-row">
                  <img src={beginnerPerson2} alt="person"
                  className="w-[80%] h-[90%] p-5 ml-5 mt-5"
                  />
              </div>
          </div>
    </div>
  )
}

export default BeginnerWeek2