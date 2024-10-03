import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Navbar from "./Navbar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, BrowserRouter as Router, useNavigate } from "react-router-dom";
import { IconLogo, IconLogout, IconWallet } from "../Icons/Icons";
import { Button } from "../ui/button";
import Footer from "../Footer/Footer";

const Header = () => {
  // const navigate = useNavigate();

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
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  // const isIpadScreens = useMediaQuery(
  //   "(min-width: 744px) and (max-width: 1199px)"
  // );

  return (
    <div>
      <div className="px-16 2xl:px-20 md:px-10 py-5 absolute top-0 w-full z-50">
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
          <div className="hidden lg:flex gap-4 items-center self-stretch my-auto text-base font-medium text-black min-w-[240px]">
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
              <div className="flex-grow"><Navbar /></div>
              <div>
              <div className="flex gap-4 items-center self-stretch my-auto text-base font-medium text-black min-w-[240px] mt-8 mb-12 justify-center">
                <Button size="lg" shape="circle">
                  <IconWallet />
                  <span className="ml-2 font-rubik">Connect Wallet</span>
                </Button>
                <Button size="lg" shape="circle">
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
