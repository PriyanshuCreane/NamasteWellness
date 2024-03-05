import  { useState } from 'react';
import malePhoto from "../../../public/malePhoto.png";
import femalePhoto from "../../../public/femalePhoto.png";
import { Link } from "react-router-dom";

function Gender() {
 const [gender, setGender] = useState('');

 const handleGenderChange = (e) => {
    setGender(e.target.value);
 };

 return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-screen h-screen mt-28 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">What's your Gender?</h1>
        <h1 className="mt-2 text-xl font-semibold">Let us know you better</h1>

        {/* Male and Female options */}
        <div className="w-full h-screen flex flex-row justify-center">
          <div className="w-[50%] flex flex-col items-center justify-center">
            <img src={malePhoto} alt="Gender Male" className="w-[350px] h-[500px] p-7" />
            <div className="mt-5 font-semibold text-xl flex justify-center">
              
              {/* Radio button for Male */}
              <div className="mt-2">
                <input
                 type="radio"
                 value="male"
                 checked={gender === 'male'}
                 onChange={handleGenderChange}
                 id="male"
                />
                <label htmlFor="male" className='ml-2'>Male</label>
              </div>
            </div>
          </div>

          <div className="w-[50%] flex flex-col items-center justify-center">
            <img src={femalePhoto} alt="Gender Female" className="w-[325px] h-[500px] p-7" />
            <div className="mt-5 font-semibold text-xl flex justify-center">
              
              {/* Radio button for Female */}
              <div className="mt-2">
                <input
                 type="radio"
                 value="female"
                 checked={gender === 'female'}
                 onChange={handleGenderChange}
                 id="female"
                />
                <label htmlFor="female" className='ml-2'>Female</label>
              </div>
            </div>
          </div>
        </div>

        {/* Next button */}
        <Link to='/question1'>
          <button className="w-48 h-16 text-xl font-bold p-1 rounded-xl bg-[#FF7A00] mt-4">
            Next
          </button>
        </Link>
      </div>
    </div>
 );
}

export default Gender;
