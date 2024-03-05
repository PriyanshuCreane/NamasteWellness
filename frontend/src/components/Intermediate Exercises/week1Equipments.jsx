// import * as React from "react";

import NavigationBar from "../Navigation";

function WellnessApp() {
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];
  
  const DayCard = ({ day }) => (
    <div className="flex flex-col flex-1 justify-center rounded-3xl bg-zinc-300 max-md:text-4xl">
      <div className="justify-center px-2 py-3.5 bg-white rounded-3xl max-md:text-4xl">
        {day}
      </div>
    </div>
  );

  return (
    <main className="flex flex-col">
      {/* <header className="flex gap-5 justify-between px-5 py-px text-6xl leading-6 text-center text-black whitespace-nowrap bg-white max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba6a27d77c2e775f9925462b2dab4be586b5d8cca044437f85e3efd680afcf03?apiKey=d99ea98b3ab740cf9ca0a1f5d82d2cd8&" className="aspect-[0.98] w-[88px]" alt="Namaste Wellness Logo" />
        <h1 className="flex-auto my-auto max-md:max-w-full max-md:text-4xl">NamasteWellness</h1>
      </header> */}
      <NavigationBar/>
      <section className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <article className="flex overflow-hidden relative flex-col grow items-start px-11 py-12 text-6xl leading-6 text-center text-black min-h-[964px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc9ce71fe58564604e1d458582e4ca6c73157b040787f70d586deb458800c81e?apiKey=d99ea98b3ab740cf9ca0a1f5d82d2cd8&" className="object-cover absolute inset-0 size-full" alt="" />
              <p className="relative mt-28 ml-32 font-light leading-6 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl max-md:leading-4">
                Halfway <br/><br/> there, <br /> <br /> <br /> crust the<br/><br/> rest!
              </p>
              <h2 className="relative self-center mt-48 text-8xl leading-6 max-md:mt-10 max-md:text-4xl">
                Week 1
              </h2>
              <div className="flex relative gap-5 justify-between mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                {days.slice(0, 3).map(day => <DayCard key={day} day={day} />)}
              </div>
              <div className="flex relative gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                {days.slice(3).map(day => <DayCard key={day} day={day} />)}
              </div>
            </article>
          </div>
          <aside className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <h2 className="text-8xl leading-6 text-center text-black max-md:max-w-full max-md:text-4xl">Weekly Challenge</h2>
          </aside>
          <aside className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/550e01ae03e654dbf6eb41b07a6bc868bae46c5914906f4b5fea82a8b840dc28?apiKey=d99ea98b3ab740cf9ca0a1f5d82d2cd8&" className="w-full aspect-[0.93] max-md:max-w-full" alt="Weekly Challenge Inspiration" />
          </aside>
        </div>
      </section>
    </main>
  );
}

export default WellnessApp;