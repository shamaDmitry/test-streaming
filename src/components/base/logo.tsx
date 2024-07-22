import { Camera } from "lucide-react";

const Logo = () => {
  return (
    <a
      href="#"
      className="group transition-all items-center gap-2 flex py-2 px-4 text-red-500"
    >
      <Camera />
      <span className="after:w-0 group-hover:after:w-full relative pb-1 after:border-red-500 uppercase after:absolute after:bottom-0 after:transition-all  after:left-0 after:border-b-2 border-red-500 transition-all">
        testlix
      </span>
    </a>
  );
};

export default Logo;
