function Header() {
  return (
    <header className="text-white rounded-2xl py-2 px-4 flex flex-row items-center justify-between backdrop-blur-lg bg-lime-800/20 my-1">
      <h2>Farmland</h2>
      <ul className="flex flex-row items-center gap-3">
        <li>Instagram</li>
        <li>Github</li>
        <li>LinkedIn</li>
      </ul>
      <button>Know Gagan</button>
    </header>
  );
}

export default Header;
