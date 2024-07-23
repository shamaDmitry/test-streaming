import { FC } from "react";
import { Menu, Search, Star, User, Video } from "lucide-react";
import Logo from "./base/logo";
import { cn, uuid } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    <>
      <Sheet>
        <SheetTrigger className="bg-dark/90 border border-primary text-white shadow-xl fixed z-50 right-0 transition-all top-0 p-4 md:hidden md:opacity-0 opacity-100">
          <Menu />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-primary text-white border-primary"
        >
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>

            <SheetDescription>
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
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="hidden md:block fixed left-0 top-0 h-full w-52 bg-primary text-white py-5 px-0">
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
    </>
  );
};

export default Navigation;
