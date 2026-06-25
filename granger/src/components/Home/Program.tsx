function Program() {
  return (
    <section className="bg-white py-10 px-10 rounded-xl flex flex-col w-full">
      <div className="flex flex-row justify-between items-center ">
        <p className="flex flex-row gap-2">
          <span className="bg-gray-300 text-gray-800 px-3 py-1 rounded-xl">
            Virtual Challenge
          </span>
          <span className="bg-gray-300 text-gray-800 px-3 py-1 rounded-xl">
            Coummunity Tournamets
          </span>
        </p>
        <p>🔵 The Program</p>
      </div>
      <div className="flex flex-row gap-4 justify-between items-end my-5">
        <h2 className="text-6xl">
          Elevate Your experience with Handpicked featured.
        </h2>
        <p className="text-gray-600 text-right text-d">
          Lorem dolor sit amet consectetur adipisicing elit. Suscipit, autem!
        </p>
      </div>
      <div className="flex flex-row gap-2 overflow-scroll ">
        <div className="h-74 rounded-2xl shrink-0 w-44 p-2  bg-slate-100">
          <p className="text-4xl">
            01/<span className="text-base text-gray-700">9</span>
          </p>
          <p>Upcoming Events</p>
          <div></div>
        </div>
        <div className=" ml-6 h-74 w-96 shrink-0 bg-black text-white rounded-2xl p-4 flex flex-col justify-between">
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            tempore?
          </p>
          <button className="border-white border px-3 py-1 w-fit rounded-3xl hover:bg-white hover:text-black">
            Join Now
          </button>
        </div>
        <div className="h-74 w-96 shrink-0 bg-fuchsia-400 rounded-2xl p-4 flex flex-col justify-between">
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            tempore?
          </p>
          <button className="border-white border px-3 py-1 w-fit rounded-3xl hover:bg-white hover:text-black">
            Join Now
          </button>
        </div>
        <div className="h-74 w-96 shrink-0 bg-red-400 rounded-2xl p-4 flex flex-col justify-between">
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            tempore?
          </p>
          <button className="border-white border px-3 py-1 w-fit rounded-3xl hover:bg-white hover:text-black">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Program;
