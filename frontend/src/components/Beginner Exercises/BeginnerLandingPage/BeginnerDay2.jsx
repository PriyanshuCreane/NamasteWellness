import NavigationBar from "../../Navigation1"
import plank from "../../../../public/plank.png"
import reverseCrunches from "../../../../public/reverseCrunches.png"
import birdDogCrunch from "../../../../public/birdDogCrunch.png"
function BeginnerDay2() {
return (
<>    
    <div className="w-full h-screen bg-[#FFE6CC] mb-20">
        <NavigationBar/>     
          <div className="w-full flex flex-row items-center justify-center">
            <div className="p-4 w-[50%] h-screen flex flex-col">
                <div className="w-full flex flex-row justify-between">
                    <button style={{fontFamily:"Puppies Play"}}  className="text-3xl w-32 h-20 rounded-3xl font-semibold flex-row bg-gradient-to-b from-[#FDC78A] to-[#FEEAD5]">
                        Day 2
                    </button>
                    <h1 style={{fontFamily:"Risque", fontStyle:"normal"}} className="text-3xl font-semibold flex-row justify-end items-end m-4">
                        Build Core
                    </h1>  
                </div>
                <div className="flex flex-col justify-center mb-5 m-16 mt-12">
                      <div style={{fontFamily:"Risque", fontStyle:"normal"}} className="text-2xl font-semibold">Plank : </div> 
                      <p className="flex justify-start"> 
                          <br/>
                          Support your lower body on your forearms with your legs <br /> behind you, keep your back straight and low holding this <br />position for as long as possible. When improving with your <br />core strength, start to hold for longer times. 
                        </p>
                </div>
                  <div className="mt-2 ml-14 p-2">
                      <div className="flex flex-col">
                        <div style={{fontFamily:"Risque", fontStyle:"normal"}} className="text-xl font-semibold flex ">Tips for plank form : <br /><br/></div>
                        <ul className="list-disc ml-7">
                            <li>Keep your body in a straight line from head to heels</li>
                            <li>Engage your core muscles throughout the entire hold</li>
                            <li>Breathe steadily and avoid holding your breath</li>
                            <li>Avoid sagging your hips or arching your back</li>
                        </ul>
                      </div> 
                  </div> 
                  
                  <div className="bc">
                      <div className="innerdiv ml-16 mt-12 flex flex-row space-x-12">
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex ">Timer</button>
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex justify-center">30s</button>
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex justify-center">45s</button>
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex justify-center">60s</button>
                      </div>
                  </div>
            </div>
              
              {/* Right img  */}
            <div className="w-[50%] h-screen">
                <div className="h-[50%]">
                      <img src={plank} alt="Exercise Plank"  className="mt-16"/>
                </div>
                <div className="m-16 grid grid-cols-3 gap-6">
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Toned Muscle</div>
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Strong Abs</div>
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Improved Posture</div>
                    <div className="w-36 bg-[#DCC1A4] p-1.5 rounded-lg">Straight Back</div>
                    <div className="w-36 bg-[#DCC1A4] p-1 rounded-lg">Focus & Relaxation</div>
                    <div className="w-36 bg-[#DCC1A4] p-1.5 rounded-lg">Boots Metabolism</div>
                </div>
            </div>  
        </div>      
    </div>


    <div className="w-full h-screen bg-[#FFE6CC] mb-40">   
          <div className="w-full flex flex-row items-center justify-center">
            <div className="p-4 w-[50%] h-screen flex flex-col">
                {/* <div className="w-full flex flex-row justify-between">
                    <button className="w-32 h-20 rounded-3xl font-semibold flex-row bg-gradient-to-b from-[#FDC78A] to-[#FEEAD5]">
                        Day 1
                    </button>
                    <h1 className="text-3xl font-semibold flex-row justify-end items-end m-4">
                        Build Core
                    </h1>  
                </div> */}
                <div className="flex flex-col justify-center mb-5 m-12 mt-12">
                      <div className="text-2xl font-semibold">Reverse Crunches : </div> 
                      <p className="flex justify-start"> 
                          <br/>
                          This exercise increases the strength in your low abdominal area,<br/> helping focus on this one area if you want a more targeted exercise.<br/><br/>
                          How To do:<br/>
                          Lie on your back with your knees bent to your chest. Lower your feet down to the ground slowly, try to keep your feet elevated slightly off the ground before bringing your knees back up to your chest.
                        </p>
                </div>
                  <div className="mt-2 ml-10 p-2">
                      <div className="flex flex-col">
                        <div className="text-xl font-semibold flex ">Tips for Reverse Crunches form : <br /><br/></div>
                        <ul className="list-disc ml-6">
                            <li>Before lifting your legs, contract your lower abs by pulling your belly button towards your spine</li>
                            <li>Lift your hips off the floor slowly and with control, focusing on using your abs to lift, not momentum.</li>
                            <li>Exhale as you lift your legs and hips, and inhale as you lower them back down to the starting position.</li>
                            <li>Ensure your lower back stays pressed into the mat throughout the exercise to target the lower abs effectively.</li>
                            <li>Begin with a comfortable number of reps, and increase gradually as you build strength and control.</li>
                        </ul>
                      </div> 
                  </div> 
                  
                  <div className="bc">
                      <div className="innerdiv ml-16 mt-12 flex flex-row space-x-12">
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex ">Timer</button>
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex justify-center">30s</button>
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex justify-center">45s</button>
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex justify-center">60s</button>
                      </div>
                  </div>
            </div>
              
              {/* Right img  */}
            <div className="w-[50%] h-screen">
                <div className="h-[50%]">
                      <img src={reverseCrunches} alt="Reverse Crunches"  className="mt-16"/>
                </div>
                <div className="m-16 grid grid-cols-3 gap-6">
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Toned Muscle</div>
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Strong Abs</div>
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Improved Posture</div>
                    <div className="w-36 bg-[#DCC1A4] p-1.5 rounded-lg">Straight Back</div>
                    <div className="w-36 bg-[#DCC1A4] p-1 rounded-lg">Focus & Relaxation</div>
                    <div className="w-36 bg-[#DCC1A4] p-1.5 rounded-lg">Boots Metabolism</div>
                </div>
            </div>  
        </div>      
    </div>   


    <div className="w-full h-screen bg-[#FFE6CC] mb-10 pb-5">   
          <div className="w-full flex flex-row items-center justify-center">
            <div className="p-4 w-[50%] h-screen flex flex-col">
                {/* <div className="w-full flex flex-row justify-between">
                    <button className="w-32 h-20 rounded-3xl font-semibold flex-row bg-gradient-to-b from-[#FDC78A] to-[#FEEAD5]">
                        Day 1
                    </button>
                    <h1 className="text-3xl font-semibold flex-row justify-end items-end m-4">
                        Build Core
                    </h1>  
                </div> */}
                <div className="flex flex-col justify-center mb-5 m-12 mt-12">
                      <div className="text-2xl font-semibold">Bird Dog Crunch : </div> 
                      <p className="flex justify-start"> 
                          <br/>
                          This unusually named exercise is perfect for targeting your lower back! A lot of the core activities you’re used to target your abdominal area, this crunch helps not only your lower back but improves balance and stability.<br/><br/>
                          How To do:
                          Kneel on all fours before raising your right arm out, at the same time straighten your left leg out. Once you’ve done this hold before lowering to the ground, repeat on the other side.
                        </p>
                </div>
                  <div className="mt-2 ml-10 p-2">
                      <div className="flex flex-col">
                        <div className="text-xl font-semibold flex ">Tips for Reverse Crunches form : <br /><br/></div>
                        <ul className="list-disc ml-6">
                            <li>Activate your core muscles by pulling your belly button towards your spine throughout the exercise.</li>
                            <li>Keep your hips and shoulders parallel to the ground to ensure proper alignment.</li>
                            <li>Fully extend your arm and leg, reaching them out in opposite directions to engage your lower back.</li>
                            <li>Pause briefly at the top of the movement, squeezing your glutes and lower back for maximum contraction.</li>
                            <li>Move slowly and with control to avoid momentum, focusing on the contraction of your lower back muscles.</li>
                        </ul>
                      </div> 
                  </div> 
                  
                  <div className="bc">
                      <div className="innerdiv ml-16 mt-12 flex flex-row space-x-12">
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex ">Timer</button>
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex justify-center">30s</button>
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex justify-center">45s</button>
                          <button className="w-16 border bg-[#FECA8E] p-2 rounded-xl flex justify-center">60s</button>
                      </div>
                  </div>
            </div>
              
              {/* Right img  */}
            <div className="w-[50%] h-screen">
                <div className="h-[50%]">
                      <img src={birdDogCrunch} alt="Reverse Crunches"  className="mt-16"/>
                </div>
                <div className="m-16 grid grid-cols-3 gap-6">
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Toned Muscle</div>
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Strong Abs</div>
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Improved Posture</div>
                    <div className="w-36 bg-[#DCC1A4] p-1.5 rounded-lg">Straight Back</div>
                    <div className="w-36 bg-[#DCC1A4] p-1 rounded-lg">Focus & Relaxation</div>
                    <div className="w-36 bg-[#DCC1A4] p-1.5 rounded-lg">Boots Metabolism</div>
                </div>
            </div>  
        </div>      
    </div>   
</>    
)
}

export default BeginnerDay2