import DndLogo from "./DndLogo";
import QuitButton from "./QuitButton";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto">
          {/* navbar */}
          <nav className="flex justify-between bg-secondary text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <DndLogo />
              {/* Nav Links */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"></ul>
              <QuitButton />
            </div>
          </nav>
        </section>
      </div>
    </>
  );
}
