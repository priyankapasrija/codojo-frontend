import { useNavigate } from "react-router-dom";

import downloadImage from "../images/download.png";
import { GoHome } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";

const Content = () => {
  const navigate = useNavigate();

  const bookADemoPage = () => {
    navigate("/book-a-demo");
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 items-center min-h-screen p-6 bg-gray-100">
      <div className="p-10 md:w-1/2 space-y-6">
        <h1 className="text-[#673AB7] text-4xl font-semibold leading-tight">
          Creating Future Tech <br />
          Leaders
        </h1>
        <h3 className="text-[#E91E63] text-xl">
          Live online 1:1 interactive classes for kids aged 5-17
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-lg">
            <GoHome className="text-2xl text-[#E91E63]" />
            Learn comfortably from home
          </li>
          <li className="flex items-center gap-2 text-lg">
            <LuUser2 className="text-2xl text-[#E91E63]" />
            Guided by a dedicated expert mentor
          </li>
          <li className="flex items-center gap-2 text-lg">
            <BsStars className="text-2xl text-[#E91E63]" />
            AI-powered personalized learning experience
          </li>
          <li className="flex items-center gap-2 text-lg">
            <RiCalendarScheduleLine className="text-2xl text-[#E91E63]" />
            Flexible class scheduling from any location
          </li>
        </ul>
        <button
          className="bg-[#673AB7] hover:bg-[#E91E63] text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={bookADemoPage}
        >
          Book a Free Demo
        </button>
      </div>
      <div className="flex justify-center items-center md:w-1/2">
        <img
          src={downloadImage}
          alt="Interactive class"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Content;
