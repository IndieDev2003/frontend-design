import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="py-4">
      <div className="flex flex-row justify-end">
        <p className="flex flex-col gap-1 text-end items-end">
          <span className="px-3 py-0.5 bg-fuchsia-800 rounded-3xl text-white">RE Production</span>
          <span className="px-3 py-0.5 bg-fuchsia-800 rounded-3xl w-fit text-white">2026.09</span>
        </p>
      </div>
      <h2 className="flex flex-col items-center justify-center gap-1 text-gray-800 text-7xl py-20">
        <span>Level up Your</span>
        <span>Design With Our</span>
        <span>Design Class</span>
      </h2>
      <div className="flex flex-row items-end justify-between">
        <p className="flex flex-col">
          <span className="text-xl">With more than</span>
          <span className="text-gray-700">2K+ MEMBERS</span>
          <span className="text-gray-700">500+ TUTORIALS</span>
        </p>
        <button className="flex flx-row text-xl items-center justify-center">
          <p className="border px-3 py- border-orange-400 rounded-3xl">
            Join Us
          </p>
          <ArrowUpRight
            size={30}
            className=" bg-orange-400 text-black rounded-3xl"
          />
        </button>
      </div>

      <div className="flex flex-row items-center justify-evenly my-20">
        <ArrowLeft size={48}/>
        <div className="size-44 bg-fuchsia-500 rounded-4xl"></div>
        <div className="size-44 bg-orange-500 rounded-4xl"></div>
        <div className="size-44 bg-blue-500 rounded-4xl"></div>
        <div className="size-44 bg-red-500 rounded-4xl"></div>
        <ArrowRight size={48}/>
      </div>
    </section>
  );
}

export default Hero;
