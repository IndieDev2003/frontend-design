const navLinks = [
  "Home",
  "Drones",
  "How It Works",
  "Services",
  "Blog",
  "Contact Us",
];

function Header() {
  return (
    <div className="relative z-100 ">
      <header className="absolute right-40 top-3 flex flex-row items-center justify-center gap-1 text-green-950 font-semibold">
        <h2 className="text-xl bg-white px-4 py-1 rounded-3xl">Agrone</h2>
        <div className="flex flex-row gap-6 bg-white px-4 py-1 rounded-3xl items-center">
          {navLinks.map((item) => {
            return (
              <p
                className="hover:text-black hover:bg-amber-200 px-2 rounded-3xl py-1"
                key={item}
              >
                {item}
              </p>
            );
          })}
        </div>
        <button className="bg-white px-4 py-2 rounded-3xl">Contact Us</button>
      </header>
    </div>
  );
}

export default Header;
