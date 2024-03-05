// import React from "react";

import NavigationBar from "./Navigation";

// const Header = () => (
//   <header className="flex gap-5 justify-between pr-9 pl-4 w-full whitespace-nowrap bg-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
//     <div className="flex gap-5 justify-between text-6xl leading-6 text-center text-black max-md:text-4xl">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c0ab9d8c4e178ff091a8832533c2fdce201ea0a805d22159b2136583b4ffa85?apiKey=d99ea98b3ab740cf9ca0a1f5d82d2cd8&"
//         alt="NamasteWellness Logo"
//         className="aspect-[0.93] w-[85px]"
//       />
//       <h1 className="grow my-auto max-md:text-4xl">NamasteWellness</h1>
//     </div>
//     <div className="flex gap-5 justify-between my-auto text-lg leading-6">
//       <div className="my-auto font-medium text-stone-500">Login</div>
//       <button className="grow justify-center px-5 py-3.5 font-semibold text-center text-white bg-orange-500 rounded-full">
//         Sign up
//       </button>
//     </div>
//   </header>
// );

const ImageSection = () => (
  <section className="z-10 w-full max-sm:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
      <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
        <img
          loading="Are You Lazy!!"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dbcab24c16e0bfdaef8c7988113409db5cb7bb02326953cc725a3338487ecb5?apiKey=d99ea98b3ab740cf9ca0a1f5d82d2cd8&"
          alt="Yoga Practice"
          className="grow w-full  max-md:mt-10 max-md:max-w-full"
        />
        <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-72 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90b2982b1ff36ee4579ade73832ec0995ee2ae3bb17d80bb66fc4cdf95f94834?apiKey=d99ea98b3ab740cf9ca0a1f5d82d2cd8&"
            alt="Fitness Tracker"
            className="max-w-full aspect-[1.01] w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f30749a85d5f3f0769e15b9371a40849f021e3036d49c9b4233adde9327a42f4?apiKey=d99ea98b3ab740cf9ca0a1f5d82d2cd8&"
            alt="Healthy Food"
            className="self-end mt-28 max-w-full aspect-[0.43] w-[118px] max-md:mt-10"
          />
        </div>        
      </div>
      </div>
    </div>
  </section>
);

const WellnessApp = () => (
  <div className="flex flex-col">
        {/* <Header /> */}
    <NavigationBar/>
    <ImageSection />
  </div>
);

export default WellnessApp;