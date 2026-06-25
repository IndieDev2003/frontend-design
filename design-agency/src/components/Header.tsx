function Header() {
  return (
    <header className="flex flex-row items-center justify-between pt-4 pb-3 text-gray-700 border-b">
      <ul className="flex flex-row gap-3 items-center">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
      </ul>
      <h2 className="text-3xl text-black">Akisa Design</h2>
      <ul className="flex flex-row gap-3 items-center">
        <li>Class</li>
        <li className="border border-orange-400 px-3 py-1 rounded-3xl text-orange-400 hover:bg-orange-400 hover:text-white">Contact Us</li>
      </ul>
    </header>
  );
}

export default Header;
