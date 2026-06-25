function Footer() {
  return (
    <div className="p-4">
      <footer className="w-full min-h-64 bg-white rounded-xl p-4">
        <div className="flex justify-between">
          <div className="w-1/2">
            <p className=" text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis aut necessitatibus eaque ex similique hic ipsam
              mollitia repellat rem et!
            </p>
            <p className="flex flex-row gap-1 my-2 shrink-0 w-max">
              <span className="px-4 rounded-3xl py-1 text-base bg-gray-300">
                ✈ Travel Around The World
              </span>
              <span className="px-4 rounded-3xl py-1 text-base bg-gray-300">
                💻 Coding For the Future
              </span>
              <span className="px-4 rounded-3xl py-1 text-base bg-gray-300">
                ⚽ Sports Like Life
              </span>
            </p>
          </div>
          <div>
            <ul className="text-right">
              <li className="text-xl ">Links</li>
              <li>Github</li>
              <li>Contact</li>
              <li>About Us</li>
              <li>What we do</li>
            </ul>
          </div>
        </div>
        <h3 className="text-[12rem] text-center">GRANGER</h3>
      </footer>
    </div>
  );
}

export default Footer;
