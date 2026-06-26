import { ArrowRight, StarIcon } from "lucide-react";
import { heroBg } from "../../assets";

function Hero() {
  return (
    <div className="relative overflow-hidden h-screen w-sreen  rounded-3xl">
      <div className="relative z-20">
        <img
          src={heroBg}
          alt=""
          className="object-cover object-center absolute "
        />
      </div>

      <div className="z-30 relative p-10 h-full w-full flex flex-col justify-center ">
        <div className="flex justify-around items-center h-2/3">
          <div className="text-white flex flex-col gap-6">
            <h2 className="text-white text-7xl">
              Part of Future <br /> Agriculture
            </h2>
            <button className="w-fit flex flex-row gap-4 px-4 py-2 border border-white rounded-4xl">
              Shop All <ArrowRight />
            </button>
          </div>
          <div className="relative">
            <div className="size-48  rounded-3xl bg-white"></div>
            <div className="size-52 text-gray-600 rounded-3xl bg-lime-300 absolute top-2 flex flex-col justify-between -left-2 right-0 z-1 p-4">
              <div className="flex ">
                <p className="text-4xl">4.9</p>
                <StarIcon size={14} />
              </div>
              <div>
                <p>4000+ Customer reviews</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-4xl">G</p>
                <StarIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="bg-white w-2/5 p-2 px-3 rounded-3xl  flex gap-4">
            <img
              src="https://i.pinimg.com/1200x/cb/97/59/cb9759748ad29391dcd3e0bea72318a2.jpg"
              alt=""
              className="size-36"
            />
            <div className="flex flex-col justify-end gap-2 items-start py-4">
              <h2 className="text-2xl">DJI Agras T50</h2>
              <p className="text-sm">
                Fully automatic and manual operation orchard mode varibale mode
              </p>
              <button className="px-4 py-1 border rounded-3xl">
                View Details
              </button>
            </div>
          </div>
          <div className="bg-white w-2/5 p-2 px-3 rounded-3xl flex gap-4">
            <div className="flex flex-col justify-end items-start gap-2 py-4">
              <h2 className="text-2xl">DJI E88 Pro</h2>
              <p className="text-sm">
                Fully automatic and manual operation orchard mode varibale mode
              </p>
              <button className="px-4 py-1 border rounded-3xl">
                View Details
              </button>
            </div>
            <img
              src="https://i.pinimg.com/736x/14/3b/4d/143b4d6eabca67a8e29a78a1747feec8.jpg"
              alt=""
              className="size-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
