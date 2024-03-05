import NavigationBar from "../../Navigation1"
import Mountain from "../../../../public/mountain1.png"
import pushup1 from "../../../../public/pushup1.png"
import birdDogCrunch from "../../../../public/birdDogCrunch.png"
function BeginnerDay2() {
return (
<>    
    <div className="w-full h-screen bg-[#FFE6CC] mb-40">
        <NavigationBar/>     
          <div className="w-full flex flex-row items-center justify-center">
            <div className="p-4 w-[50%] h-screen flex flex-col">
                <div className="w-full flex flex-row justify-between">
                    <button style={{fontFamily:"Puppies Play"}}  className="text-3xl w-32 h-20 rounded-3xl font-semibold flex-row bg-gradient-to-b from-[#FDC78A] to-[#FEEAD5]">
                        Day 1
                    </button>
                    <h1 style={{fontFamily:"Risque", fontStyle:"normal"}} className="text-3xl font-semibold flex-row justify-end items-end m-4">
                    Fool Body Cardio & Strength                    </h1>  
                </div>
                <div className="flex flex-col justify-center mb-5 m-16 mt-12">
                      <div style={{fontFamily:"Risque", fontStyle:"normal"}} className="text-2xl font-semibold">Push Ups : </div> 
                      <p className="flex justify-start"> 
                          <br/>
                          Push-ups are a classic bodyweight exercise that targets the chest, arms, and core muscles. Push-ups are a versatile and effective exercise for building upper body strength and overall fitness.
                          
                        </p>



                      <div className="mt-2 p-2">
                      <div className="flex flex-col">
                        <div style={{fontFamily:"Risque", fontStyle:"normal"}} className="text-xl font-semibold flex ">How to do: <br /><br/></div>
                        <ul className="list-disc ml-7">
                            <li>Start in a high plank position, hands shoulder-width apart and palms flat on the floor.</li>
                            <li>Lower your body by bending elbows until chest nearly touches the ground, keeping core engaged.</li>
                            <li>Push back up to starting position, fully extending arms without locking elbows.</li>
                            <li>Repeat for desired number of reps, maintaining a straight line from head to heels throughout.</li>
                        </ul>
                      </div> 
                  </div> 

                         

                          
                        
                </div>
                  <div className="mt-2 ml-14 p-2">
                      <div className="flex flex-col">
                        <div style={{fontFamily:"Risque", fontStyle:"normal"}} className="text-xl font-semibold flex ">Tips for Push Ups : </div>
                        <ul className="list-disc ml-7">
                            <li>Keep your core tight throughout the movement to protect your lower back and engage your abs.</li>
                            <li>Maintain a neutral neck position by looking at a spot on the floor about a foot in front of your hands.</li>
                            <li>Keep elbows close to your body as you lower down to target the triceps and reduce strain on shoulders.</li>
                            <li>If regular push-ups are challenging, start with modified push-ups on knees until strength improves.</li>
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
                      <img src={pushup1} alt="Exercise Plank"  className="mt-16"/>
                </div>
                <div className="m-16 grid grid-cols-3 gap-6">
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Increases Power</div>
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Strengthens Back</div>
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Develops Shoulders</div>
                    <div className="w-36 bg-[#DCC1A4] p-1.5 rounded-lg">Tones Core</div>
                    <div className="w-36 bg-[#DCC1A4] p-1 rounded-lg">Builds Arm</div>
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
                      <div style={{fontFamily:"Risque", fontStyle:"normal"}} className="text-2xl font-semibold">Mountain Climbers: </div> 
                      <p className="flex justify-start"> 
                          <br/>
                          Mountain Climbers are a dynamic full-body exercise that targets the core, shoulders, arms, and legs.<br/><br/>
                          

                        </p>
                 </div>



                 <div className="mt-2 ml-10 p-2">
                      <div className="flex flex-col">
                        <div style={{fontFamily:"Risque", fontStyle:"normal"}} className="text-xl font-semibold flex ">How to do : <br /><br/></div>
                        <ul className="list-disc ml-6">
                            <li>Start in a high plank position, hands shoulder-width apart and palms flat on the floor.</li>
                            <li>Engage your core and keep your back flat.</li>
                            <li>When switching legs, land your foot softly to reduce impact on joints.</li>
                            <li>Drive your right knee toward your chest, then quickly switch legs, bringing the left knee in as the right leg extends back</li>
                            <li>Continue alternating legs in a running motion, keeping a steady pace</li>
                        </ul>
                      </div> 
                  </div> 








                  <div className="mt-2 ml-10 p-2">
                      <div className="flex flex-col">
                        <div style={{fontFamily:"Risque", fontStyle:"normal"}} className="text-xl font-semibold flex ">Tips Mountain Climbing : <br /><br/></div>
                        <ul className="list-disc ml-6">
                            <li>Keep your abs tight throughout the exercise to stabilize your body.</li>
                            <li>Avoid raising your hips too high or sagging them; aim for a straight line from head to heels..</li>
                            <li>When switching legs, land your foot softly to reduce impact on joints.</li>
                            <li>Focus on form and control rather than speed, especially if you're new to the exercise.</li>
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
                      <img src={Mountain} alt="Reverse Crunches"  className="mt-16"/>
                </div>
                <div className="m-16 grid grid-cols-3 gap-6">
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Toned Muscle</div>
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Strong Abs</div>
                    <div className="w-36 bg-[#DCC1A4] p-2 rounded-lg">Core Strengthening</div>
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
                        <div className="text-xl font-semibold flex ">Bird Dog Crunch : <br /><br/></div>
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
                      <img src={Mountain} alt="Reverse Crunches"  className="mt-16"/>
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