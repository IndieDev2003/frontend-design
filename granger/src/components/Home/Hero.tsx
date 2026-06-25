import backImg from '../../assets/hero.jpg'
function Hero() {
  return (
    <section className="h-[70vh] md:h-screen w-full flex flex-col relative overflow-hidden rounded-xl">
      <img src={backImg} className="absolute z-10 h-screen w-full object-cover" />
      <div className='z-20 text-white p-4 flex flex-col justify-between h-full'>
        <div className="flex justify-between">
          <h2>CUSTOM WELLNESS</h2>
          <h2 className="underline cursor-pointer">Get In Touch</h2>
        </div>
        <div className="w-full">
          <h2 className="text-3x text-6xl">
            A new species <br /> of sportainment.
          </h2>
          <p>👑Improve your health - performance well.</p>
        </div>
        <div>
          <h4 className="text-7xl md:text-[15.5rem]">GRANGER</h4>
        </div>
      </div>
    </section>
  );
}

export default Hero;
