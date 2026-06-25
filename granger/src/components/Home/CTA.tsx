import { ctaBg } from "../../assets";

function CTA() {
  return (
    <section className="min-h-screen rounded-xl px-2 md:my-20 w-full flex flex-col gap-4 md:gap-0 md:flex-row items-center relative overflow-hidden">
      <div className="md:w-1/2 flex flex-col gap-4 pt-20 z-40">
        <div>
          <h2 className="text-xl"> The Benefit</h2>
          <p className="text-4xl">
            Explore our <br /> flexible of activity
          </p>
          <p className="flex flex-row gap-4">
            <span className="bg-white px-4 py-1 rounded-full text-center">
              Eating After The Game
            </span>
            <span className="bg-white px-4 py-1 rounded-full text-center">
              Game Jersey
            </span>
          </p>
          <p className="w-2/3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quidem saepe at fugit molestiae omnis modi, numquam laudantium qui
            aperiam!
          </p>
        </div>
        <div className="bg-white p-3 rounded-xl md:w-120 md:mt-10">
          <h3 className="text-xl relative w-full flex justify-between">
            Connections <span className="">+</span>
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            temporibus qui autem.
          </p>
        </div>
        <div className="bg-white p-3 rounded-xl md:w-120">
          <h3 className="text-xl relative w-full flex justify-between">
            Sports Package <span className="">+</span>
          </h3>
        </div>
      </div>
      <div className="w-full min-h-44 md:h-120 md:w-1/2 z-40">
        <div className="bg-white rounded-3xl h-98 md:h-120 p-4 flex flex-col-reverse  md:flex-row items-center">
          <div className="md:w-1/2 p-3 h-5/5 flex flex-col justify-between">
            <div>
              <h3 className="text-orange-400">EST - 1944</h3>
              <p className="text-gray-600 text-xs md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium voluptas expedita nobis tenetur quisquam suscipit
                quo corporis nam dolorum ducimus.
              </p>
            </div>
            <div>
              <h3 className="md:text-4xl">Visionary Precision Day</h3>
              <button className="my-2 bg-black text-white w-full text-left p-2 flex px-6 rounded-xl">
                Join Now
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden h-94 w-full md:w-1/2 rounded-xl ">
            <img
              src={ctaBg}
              alt="CTA Background"
              className=" object-cover object-center md:object-bottom h-full w-full "
            />
          </div>
        </div>
      </div>

      <div className="h-[40vh] w-[50vw] md:h-[10vw] md:w-[10vw] absolute rounded-2xl top-100  md:top-50  left-20 md:left-90 bg-orange-400 blur-4xl animate-spin transition-all"></div>
      <div className="h-[40vh] w-[50vw] md:h-[10vw] md:w-[10vw] absolute rounded-2xl top-100  md:top-50  left-20 md:left-90 bg-blue-200 blur-4xl animate-spin transition-all"></div>
      <div className="h-[40vh] w-[50vw] md:h-[10vw] md:w-[10vw] absolute rounded-2xl top-100  md:top-50  left-20 md:left-90 bg-fuchsia-200 blur-4xl animate-spin transition-all"></div>
    </section>
  );
}

export default CTA;
