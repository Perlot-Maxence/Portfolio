import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import ScrollIcon from "./ScrollIcon";

export default function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollPercentage = (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div
        className="w-1 bg-primary"
        style={{ height: `${scrollPercentage}%` }}
      ></div>
      {scrollPercentage > 0 ? <button onClick={() => scrollTo(0,0)}  className="hover:scale-110 transition duration-300 z-10 cursor-pointer absolute bottom-5 right-5 border-2 rounded p-2 text-3xl text-primary border-primary animate-pulse"><BsArrowUp/></button>: <ScrollIcon/>}
    </div>
  );
}