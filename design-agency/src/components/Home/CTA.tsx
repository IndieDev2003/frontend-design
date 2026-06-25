
function CTA() {
  return (
    <section className=" min-h-[50vh] w-full p-10">
      <div className="h-full border border-gray-400 rounded-3xl p-5 flex flex-col items-center">
        <h4 className="text-fuchsia-400 text-2xl">- Akisa Design Studio -</h4>
        <div className="flex flex-col items-center text-center gap-4">
          <h5 className="text-center text-4xl">
            Helps you to learn and hone your skills <br />
            through a trusted{" "}
            <span className="bg-orange-200/90">Akisa Deisgn </span> Coummunity
          </h5>
          <p className="text-gray-600">
            Come join us and not only increase your knowledge but <br /> also
            your family because we are solid team
          </p>
        </div>
        <div className="border-t flex flex-row justify-between w-full mt-2 py-2 text-gray-400">
          <h3>Akisa Design Studio</h3>
          <ul className="flex flex-row gap-2 items-center text-center">
            <li>
              <a href="https://instagram.com/_gagansuman_" target="blank">Instagram</a>{" "}
            </li>
            <li><a href="http://github.com/indiedev2003" target="blank">Github</a></li>
            <li><a href="https://linkedin.com/in/gagan-suman" target="blank">LinkedIn</a> </li>
          </ul>
          <ul>
            <li>Made by Gagan Suman - 2026</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CTA;
