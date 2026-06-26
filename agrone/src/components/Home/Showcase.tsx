import { ArrowLeftCircle, ArrowRightCircle, MoveRight, MoveRightIcon } from "lucide-react";

const showcaseData = [
  {
    imgSrc:
      "https://i.pinimg.com/1200x/e6/99/61/e69961fcf2cb16193e805139a750fbbf.jpg",
    title: "Heavy Payload",
    index: 1,
  },
  {
    imgSrc:
      "https://i.pinimg.com/1200x/46/a3/e6/46a3e60fb8d61b64332f6bb356777efa.jpg",
    title: "Smooth Spreading",
    index: 2,
  },
  {
    imgSrc:
      "https://i.pinimg.com/1200x/65/ea/a4/65eaa4f7b6483ce1a40e618302909585.jpg",
    title: "Four Sprinkler Kit",
    index: 3,
  },
];

function Showcase() {
  return (
    <section className="py-10">
      <div className="flex justify-between items-end">
        <h2 className="text-5xl text-lime-950">
          Elevate <br />
          drone agricultural <br />
          operations new hieghts.
        </h2>
        <button className="px-4 py-2 text-lime-950 border-lime-950 border rounded-3xl">
          Explore Drones
        </button>
      </div>
      <div className="flex flex-row items-center justify-between gap-4 mt-6">
              <div className="w-1/3">
                  <h2 className="text-3xl">Agrone</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            debitis laudantium. Assumenda molestiae nesciunt, ipsam minima esse
            pariatur libero nihil?
                  </p>
                  <div className="flex gap-2 mt-4">
                      <ArrowLeftCircle size={48}/>
                      <ArrowRightCircle size={48}/>
                  </div>
        </div>
        <div className="flex flex-row gap-2">
          {showcaseData.map((item) => {
            return (
              <div className="flex flex-col shrink-0 gap-2" key={item.index}>
                <img
                  src={item.imgSrc}
                  alt=""
                  className="h-84 w-58 rounded-2xl object-cover object-center"
                />
                <h4 className="text-lime-900 font-bold">{item.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
