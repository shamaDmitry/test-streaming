import { FC } from "react";
import { Search, Star, User, Video } from "lucide-react";
import Logo from "./base/logo";
import { cn, uuid } from "@/lib/utils";

interface NavigationProps {}

const menu = [
  {
    id: uuid(),
    title: "search",
    icon: <Search />,
  },
  {
    id: uuid(),
    title: "Movies",
    icon: <Video />,
  },

  {
    id: uuid(),
    title: "Featured",
    icon: <Star />,
  },
  {
    id: uuid(),
    title: "Profile",
    icon: <User />,
  },
];

const Navigation: FC<NavigationProps> = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-52 bg-primary text-white py-5 px-0">
      <Logo />

      <nav className="mt-8 flex flex-col gap-2 space-y-1">
        {menu.map((item, index) => {
          return (
            <a
              href="#"
              key={item.id}
              className={cn({
                "flex items-center gap-2 w-full p-4": true,
                "bg-dark": index === 1,
              })}
            >
              {item.icon}
              <span className="capitalize font-bold">{item.title}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
