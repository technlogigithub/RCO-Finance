import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { IconLogo, IconLogout, IconWallet } from "../Icons/Icons";
import { Button } from "../ui/button";
import Footer from "../Footer/Footer";
import { cn } from "@/lib/utils";

const Header = () => {


  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  useEffect(() => {
    if (isMenuToggled) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuToggled]);


  return (
    <div>
      <div className="px-5 md:px-10 lg:px-12 lgg:px-16 2xl:px-20 py-5 absolute top-0 w-full z-50">
        <header className="flex z-10 gap-10 justify-between items-center w-full max-md:max-w-full">
          <div className="flex gap-2 items-center self-stretch my-auto">
            <Link to="/">
              <IconLogo />
            </Link>
          </div>
          <div className="hidden lg:flex">
            <Navbar />
          </div>
          <button
            className="flex lg:hidden rounded-full bg-secondary-500 p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {isMenuToggled ? (
              <XMarkIcon
                className="menu-close-icon h-6 w-6 text-white"
                onClick={() => setIsMenuToggled(false)}
              />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
          <div className={cn("hidden md:flex gap-4 items-center self-stretch my-auto text-base font-medium text-black min-w-[240px]", isMenuToggled && "!hidden")}>
            <Button size="lg" shape="circle">
              <IconWallet />
              <span className="ml-2 font-rubik">Connect Wallet</span>
            </Button>
            <Button size="lg" shape="circle">
              <IconLogout />
              <span className="ml-2">Log In</span>
            </Button>
          </div>
        </header>
      </div>

      <div>
        {isMenuToggled && (
          <div className="bg-black-dark fixed left-0 top-0 h-full w-full shadow-lg z-20 p-5">
            <div className="h-full flex flex-col gap-4">
              <div className="flex-grow flex items-center justify-center"><Navbar /></div>
              <div>
              <div className="flex gap-4 items-center self-stretch my-auto text-base font-medium text-black min-w-[240px] mt-8 mb-2 md:mb-12 justify-center max-sm:flex-col">
                <Button size="lg" shape="circle" className="min-w-52 max-sm:w-full">
                  <IconWallet />
                  <span className="ml-2 font-rubik">Connect Wallet</span>
                </Button>
                <Button size="lg" shape="circle" className="min-w-52 max-sm:w-full">
                  <IconLogout />
                  <span className="ml-2">Log In</span>
                </Button>
              </div>
              <Footer isMainMenu={false} />
              </div>
            </div>
          </div>
        )}

        {isMenuToggled && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsMenuToggled(false)}
          />
        )}
      </div>
    </div>
  );
};
export default Header;
