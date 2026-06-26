const whyUsData = [
  {
    title: "All Secanrio Adaptibilty",
    number: 4,
  },
  {
    title: "Heavy Payload",
    number: 4,
  },
  {
    title: "Four Sprinkler Kit",
    number: 4,
  },
  {
    title: "High Flow Rate",
    number: 4,
  },
];

function WhyUs() {
  return (
    <div className="py-10 relative ">
      <h2 className="text-7xl text-center">Why Choose Argone</h2>
      <div className="min-h-screen w-full overflow-hidden   rounded-2xl absolute top-23 bg-orange-200 p-10 py-20">
        <div className="flex flex-col gap-1">
          {whyUsData.map((item) => (
            <div
              key={item.title}
              className="bg-white w-full  h-14 rounded-xl px-8 text-xl text-lime-950 flex flex-row items-center justify-between"
            >
              <h2>{item.title}</h2>
              <p>{item.number}</p>
            </div>
          ))}
        </div>
        <div className="w-full h-full rounded-2xl mt-2">
          <img
            src="https://i.pinimg.com/1200x/00/cc/42/00cc42c719aeaef1770e8bb0c92ef597.jpg"
            alt=""
            className="object-cover w-full rounded-3xl object-center"
          />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
