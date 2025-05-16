import { useState } from "react";
import { AiFillAccountBook, AiOutlineClose, AiOutlineLink, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }


  return (
    <>
      <div className={`fixed top-0 right-0 h-screen w-1/4 text-white flex ${isOpen ? "translate-x-0" : "translate-x-[calc(100%)]"} 
        transition-transform duration-1000 ease-out gap-5 border-l-zinc-700 border-l-2`}>
        <main className="bg-accent w-full h-full p-4 flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <button
                onClick={toggleMenu}
                className={`w-16 h-16 rounded-full! contain-content justify-center transition-all ease-out duration-1000  hover:scale-110  items-center flex mr-2 ${isOpen ? "translate-x-0" : "animate-pulse -translate-x-[calc(200%)]"}`}
              >
                <img src="/src/assets/self.jpg" />
              </button>
              <div>
                <h1 className="text-2xl! font-bold">PERLOT Maxence</h1>
                <h2 className="text-lg! font-semibold">FullStack developper</h2>
              </div>
            </div>
          </div>
          <hr className="py-2" />
          <h1 className="text-4xl!">About me</h1>
          <p>
            I am a <strong>passionate</strong> FullStack developer with a strong focus on creating efficient and scalable web applications. I enjoy solving complex problems and continuously learning new technologies to improve my skills. Let's build something amazing together!
          </p>
          <hr className="py-2" />
          <div className="flex flex-col gap-4">
            <a href="" className="navigation">
              <p>About me</p>
              <AiOutlineUser size={45} />
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="" className="navigation">
              <p>About me</p>
              <AiOutlineUser size={45} />
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="" className="navigation">
              <p>About me</p>
              <AiOutlineUser size={45} />
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="" className="navigation">
              <p>About me</p>
              <AiOutlineUser size={45} />
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="" className="navigation">
              <p>About me</p>
              <AiOutlineUser size={45} />
            </a>
          </div>

        </main>
      </div>
    </>
  )
}
