function Events() {
  return (
    <div className="bg-black text-white p-4 my-4 rounded-xl overflow-hidden">
      <div className="flex flex-row justify-between py-10">
        <h3 className="shrink-0 text-xl">📆 Current Events</h3>
        <p className="text-right text-5xl max-w-2/3 relative">
          To Win over sport-minded consumers with products own technlogy and
          excellent
          <div className="size-64 absolute bg-fuchsia-500/90 rounded-3xl animate-spin z-10"></div>
        </p>
      </div>
      <div className="my-10 z-100 relative">
        <ul>
          <h4 className="text-xl">Our Fitness Challanges</h4>
          <li className="text-3xl rounded-xl hover:bg-white hover:text-black transition-all flex flex-row justify-between py-4 px-3 border-b border-white">
            <span>Youth Sports Camp - 2026</span>
            <span>↗</span>
          </li>
          <li className="text-3xl rounded-xl hover:bg-white hover:text-black transition-all flex flex-row justify-between py-4 px-3 border-b border-white">
            <span>Obstacle Course Race  - 2026</span>
            <span>↗</span>
          </li>
          <li className="text-3xl rounded-xl hover:bg-white hover:text-black transition-all flex flex-row justify-between py-4 px-3 border-b border-white">
            <span>Sports X Game Day - 2026</span>
            <span>↗</span>
          </li>
          <li className="text-3xl rounded-xl hover:bg-white hover:text-black transition-all flex flex-row justify-between py-4 px-3 border-b border-white">
            <span>Trainer Meet & Greet - 2026</span>
            <span>↗</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Events;
