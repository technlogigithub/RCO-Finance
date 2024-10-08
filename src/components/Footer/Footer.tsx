import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { IconLogo } from "../Icons/Icons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Footer = ({ isMainMenu = true }) => {
  const socialMediaIcons = [
    {
      name: faLinkedin,
      url: "/",
    },
    {
      name: faFacebook,
      url: "/",
    },
    {
      name: faYoutube,
      url: "/",
    },
    {
      name: faInstagram,
      url: "/",
    },
  ];

  const mainLink = [
    { label: "Platform Features", id: "platformfeatures" },
    { label: "Token Benefits", id: "tokenbenefits" },

    { label: "Roadmap", id: "roadmap" },
    { label: "Tokenomics", id: "tokenomics" },
    { label: "Whitepaper", id: "whitepaper" },
    { label: "Blogs", id: "Blogs" },
  ];

  return (
    <footer
      className={cn(
        "z-30 relative bg-dark-black text-white px-5 xmd:px-10 lg:px-20",
        !isMainMenu ? "pt-8" : "py-12 lg:py-20"
      )}
    >
      {isMainMenu && (
        <div className="flex justify-between items-center pb-8 lg:pb-20 max-lg:flex-wrap max-xmd:justify-center max-xmd:flex-col">
          <Link to={"/"} className="xmd:mr-8 max-xmd:mb-8">
            <IconLogo />
          </Link>
          <ul
            className={cn(
              "flex gap-3 xmd:gap-6 2xl:gap-12 max-2xl:flex-wrap max-lg:justify-center text-secondary",
              !isMainMenu && "mt-8 "
            )}
          >
            {mainLink.map((link) => (
              <li key={link.label}>
                <Button
                  variant="ghost"
                  key={link.label}
                  onClick={() => {}}
                  className="text-xs lg:text-sm font-normal  font-rubik hover:opacity-70 p-0"
                >
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className={`text-sm text-center flex justify-between items-center max-lg:flex-wrap max-lg:justify-center max-md:max-w-56 max-md:mx-auto`}
      >
        <div
          className={cn(
            "text-[10px] md:text-sm 2xl:text-lg max-lg:order-2 max-lg:basis-full text-gray-light flex md:hidden lg:flex max-md:mt-6 justify-center"
          )}
        >
          &copy; 2024 RCO Finance. All Right Reserved
        </div>
        <div
          className={cn(
            "flex lg:space-x-24 items-center max-lg:flex-wrap max-lg:justify-center",
            !isMainMenu && "w-full"
          )}
        >
          <div
            className={cn(
              "flex md:space-x-24 max-lg:order-2 max-xmd:my-12 justify-between w-full",
              !isMainMenu && "max-xmd:mt-8 max-xmd:mb-0"
            )}
          >
            <Link
              to={"/"}
              className="underline text-gray-light max-w-sm:font-normal text-xs md:text-sm"
            >
              Terms of Use
            </Link>
            <div
              className={cn(
                "text-[10px] sm:text-sm   text-gray-light hidden md:flex lg:hidden"
              )}
            >
              &copy; 2024 DeRent. All Right Reserved
            </div>
            <Link
              to={"/"}
              className="underline text-gray-light max-w-sm:font-normal text-xs md:text-sm"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-2 max-lg:basis-full max-lg:mb-6 max-md:mb-0 max-lg:justify-center">
            {socialMediaIcons.map((icon) => (
              <Link
                to={icon.url}
                className="underline w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/30"
                key={icon.url}
              >
                <FontAwesomeIcon icon={icon.name} size="lg" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
