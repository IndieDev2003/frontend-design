

function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="text-white font-bold text-7xl text-center flex flex-col items-center justify-center py-10">
        <h1>Woodland</h1>
        <h2>LITTLE</h2>
        <h2>FARMLAND</h2>
        <p className="text-xl w-1/3 text-center">
          Discover the Joys of Farming with Farmland's Little Farmers. Each
          episode is packed with fun, lessons and nature.
        </p>
        <div className="flex flex-row gap-2">
          <button className="text-lg font-normal rounded-3xl border border-white px-4 bg-white text-gray-500 py-1">
            Login
          </button>
          <button className="text-lg font-normal rounded-3xl border border-white px-4 py-1">
            Watch Video
          </button>
        </div>
      </div>

      <div className="w-full text-white px-10 my-10">
        <div className="flex flex-row justify-between w-full">
          <p>Watch Episode</p>
          <p>browse all the episodes</p>
        </div>
        <div className="flex flex-row justify-between">
          <img
            src="https://i.pinimg.com/736x/4b/bd/1c/4bbd1c9a07f98944a10e293ae4bd6ac3.jpg"
            alt=""
            className="w-64 h-44 object-cover object-center rounded-xl"
          />
          <img
            src="https://i.pinimg.com/736x/e5/34/b3/e534b37d96c742e341384f3daf4bef2f.jpg"
            alt=""
            className="w-64 h-44 object-cover object-center rounded-xl"
          />
          <img
            src="https://i.pinimg.com/736x/57/73/7e/57737e65197da071a9c1e60956fc371f.jpg"
            alt=""
            className="w-64 h-44 object-cover object-center rounded-xl"
          />
          <img
            src="https://i.pinimg.com/736x/1b/6a/c1/1b6ac1a458b9979625bc0e9701a42f8d.jpg"
            alt=""
            className="w-64 h-44 object-cover object-center rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
