import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/6 h-screen grid grid-rows-3 items-center">
        <div className="w-full flex justify-center">
          <h1 className="uppercase font-mono text-3xl p-3 font-bold bg-black text-white border rounded-lg">
            Hydronix
          </h1>
        </div>
        <div className="w-full font-semibold flex flex-col gap-5 items-center">
          <Link to={"/"} className="flex gap-2">
            <i className="fi fi-br-house-chimney"></i>Home
          </Link>
          <Link to={"/"} className="flex gap-2">
            <i className="fi fi-bs-smoke"></i>Air Analysis
          </Link>
          <Link to={"/"} className="flex gap-2">
            <i className="fi fi-bs-raindrops"></i>Water Analysis
          </Link>
          <Link to={"/"} className="flex gap-2">
            <i className="fi fi-br-square-exclamation"></i>Precautions
          </Link>
          <Link to={"/"} className="flex gap-2">
            <i className="fi fi-br-info"></i>About Us
          </Link>
          <Link to={"/"} className="flex gap-2">
            <i className="fi fi-rr-form"></i>Contact Us
          </Link>
        </div>
        <div>
          <h2 className="w-full font-semibold p-10 text-center flex gap-2 justify-center">
            <i className="fi fi-br-binary"></i>Development
          </h2>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
