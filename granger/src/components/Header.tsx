function Header() {
  return (
    <header className="py-1 px-4 ">
      <div className="flex flex-row h-full justify-between items-center gap-4 border-b-2 pb-2">
        <h2 className="text-2xl">Granger - Akisa Design</h2>
        <ul className="hidden md:flex flex-row gap-4">
          <li className="hover:cursor-pointer">Program</li>
          <li className="hover:cursor-pointer">Product</li>
          <li className="hover:cursor-pointer">Events</li>
          <li className="hover:cursor-pointer">About</li>
          <li className="hover:cursor-pointer">Contact</li>
        </ul>

        <a href="https://github.com/indiedev2003" target="_blank">
          Github
        </a>
      </div>
    </header>
  );
}

export default Header;
