
// const SignUp = () => {
//  const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted');
//  };

//  return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-[#EB8C24] via-[#E9BA5D] to-[#DCDCDC]">
//       <div className="max-w-[50%] container mx-auto">
//         <form onSubmit={handleSubmit} className="bg-opacity-30 backdrop-blur-md bg-white p-12 rounded-lg shadow-xl">
//           <p className="text-black text-3xl font-bold opacity-70 mb-12 flex justify-center">Welcome</p>
//           <input type="text" placeholder="Username" name="username" className="w-full p-3 mb-4 border-l-2 border-t-2 border-white rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" />
//           <input type="email" placeholder="Email" name="email" className="w-full p-3 mb-4 border-l-2 border-t-2 border-white rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" />
//           <input type="password" placeholder="Password" name="password" className="w-full p-3 mb-4 border-l-2 border-t-2 border-white rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" />
//           <input type="password" placeholder="Confirm Password" name="confirm_password" className="w-full p-3 mb-4 border-l-2 border-t-2 border-white rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" />
//           <input type="submit" value="Sign Up" className="w-full p-3 mt-4 bg-green-500 text-white rounded-3xl focus:outline-none hover:bg-green-600 transition-colors duration-200" />
//         </form>

//         <div className="drops absolute">
//           <div className="drop drop-1 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
//           <div className="drop drop-2 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
//           <div className="drop drop-3 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
//           <div className="drop drop-4 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
//           <div className="drop drop-5 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
//         </div>
//       </div>
//     </div>
//  );
// };

// export default SignUp;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const navigate = useNavigate(); // Utilize the useNavigate hook

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Convert form data to JSON
    const data = JSON.stringify(formData);

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Data successfully sent to database:', responseData);

      // Handle successful signup
      setIsSignupSuccessful(true); // Set success state

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  
  

 return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-[#EB8C24] via-[#E9BA5D] to-[#DCDCDC]">
      <div className="max-w-[50%] container mx-auto">
        <form onSubmit={handleSubmit} className="bg-opacity-30 backdrop-blur-md bg-white p-12 rounded-lg shadow-xl">
          <p className="text-black text-3xl font-bold opacity-70 mb-12 flex justify-center">Welcome</p>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border-l-2 border-t-2 border-white rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border-l-2 border-t-2 border-white rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border-l-2 border-t-2 border-white rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border-l-2 border-t-2 border-white rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <input
            type="submit"
            value="SignUp"
            className="w-full p-3 mt-4 bg-green-500 text-white rounded-3xl focus:outline-none hover:bg-green-600 transition-colors duration-200"
          />
          <div className='flex justify-between'>
            <Link to='/login'>
        <button className='flex justify-center items-center p-2 m-5 border border-black rounded-lg bg-green-600'>Login Page</button>
        </Link>
        </div>
        </form>
        <div className="drops absolute">
          <div className="drop drop-1 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
          <div className="drop drop-2 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
          <div className="drop drop-3 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
          <div className="drop drop-4 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
          <div className="drop drop-5 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
        </div>
      </div>
    </div>
 );
};

export default SignUp;
