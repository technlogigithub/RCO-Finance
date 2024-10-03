import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Navbar from "./Navbar";
import Wallet from "../../../public/icons/wallet.svg";
import Signin from "../../../public/icons/sign_in.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { IconLogo, IconLogout, IconWallet } from "../Icons/Icons";
import { Button } from "../ui/button";



const Header = () => {

  const navigate = useNavigate();

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const isIpadScreens = useMediaQuery(
    "(min-width: 744px) and (max-width: 1199px)"
  );

  return (
    <div>
      <div className="lg:px-20 md:px-10 py-5 absolute top-0 w-full z-50">
        <header className="flex z-10 flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
            <div className="flex gap-2 items-center self-stretch my-auto">
                <Link to="/"><IconLogo/></Link>
            </div>
            <Navbar />
            {isAboveMediumScreens ? (
                <div className="flex gap-2 items-center self-stretch my-auto">
                    
                    <div className="flex gap-4 items-center self-stretch my-auto text-base font-medium text-black min-w-[240px]">
                        <Button size="lg" shape='circle'>
                          <IconWallet/>
                          <span className="ml-2 font-rubik">Connect Wallet</span>
                        </Button>
                        <Button size="lg" shape='circle'>
                          <IconLogout/>
                          <span className="ml-2">Log In</span>
                        </Button>
                        
                    </div>
                </div>
            ): (


                <div className="flex gap-2 items-center self-stretch my-auto text-base font-medium text-black">
                  <button
                    className="rounded-full bg-secondary-500 p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <Bars3Icon className="h-6 w-6 text-white" />
                  </button>
                  {isIpadScreens ?
                      <>
                          <button className="header-btn flex gap-2 justify-center items-center self-stretch px-4 py-3 my-auto bg-white rounded-[100px]"
                            onClick={() => navigate('/setting')} >
                              <img src={Wallet} width="50" height="50" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
                              <span className="font-face-urbanist-medium self-stretch my-auto">Connect Wallet</span>
                          </button>
                          <button className="header-btn flex gap-2 justify-center items-center self-stretch px-4 py-3 my-auto bg-white rounded-[100px]"
                              onClick={() => navigate('/login')} >
                              <img src={Signin} width="50" height="50" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
                              <span className="font-face-urbanist-medium self-stretch my-auto">Log In</span>
                          </button>
                      </>
                      : null
                  }
                </div>
            )}
        </header>
      </div>

      <div>
          {isMenuToggled && (
            <div className="mobile-menu fixed left-0 top-0 h-full w-full bg-black shadow-lg z-20 p-5">
              <div className="mobile-menu-wrapper flex flex-col gap-4">
                <XMarkIcon className="menu-close-icon h-6 w-6 text-white" onClick={() => setIsMenuToggled(false)} />
                <Navbar />
                <button className="header-btn flex gap-2 justify-center items-center self-stretch px-4 py-3 my-auto bg-white rounded-[100px]"
                  onClick={() => navigate('/setting')} >
                    <img src={Wallet} className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square svg-image" alt="" />
                    <span className="font-face-urbanist-medium self-stretch my-auto">Connect Wallet</span>
                </button>
                <button className="header-btn flex gap-2 justify-center items-center self-stretch px-4 py-3 my-auto bg-white rounded-[100px]"
                onClick={() => navigate('/login')} >
                    <img src={Signin} className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square svg-image" alt="" />
                    <span className="font-face-urbanist-medium self-stretch my-auto">Log In</span>
                </button>
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
