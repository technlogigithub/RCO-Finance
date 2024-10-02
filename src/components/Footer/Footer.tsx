import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { IconLogo } from "../Icons/Icons";
import { Button } from "../ui/button";

const Footer = ({ isMainMenu = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const mainLink =[
    { label: 'Platform Features', id:'platformfeatures' }, 
    { label: 'Token Benefits', id: 'tokenbenefits' },
   
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Tokenomics', id: 'tokenomics' },
    { label: 'Whitepaper', id: 'whitepaper' },
    { label: 'Blogs', id: 'Blogs' },
  ];
  const handleLinkClick = (id:string) => {
    // Close the menu
    setMenuOpen(false);

    // Scroll to the section
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 700,
        behavior: "smooth",
      });
    }
  };
  return (
    <footer
      className={`z-30 relative bg-dark-black text-white px-5 sm:px-10 lg:px-20 ${
        !isMainMenu ? "py-24" : "max-lg:pt-12 lg:py-20 max-lg:pb-4"
      }`}
    >

        <div className="flex justify-center lg:justify-between items-center pb-8 lg:pb-20 max-lg:flex-wrap">
          <Link to={"/"} className="mr-8">
            <IconLogo/>
          </Link>
          <ul className="flex gap-6 2xl:gap-12 max-2xl:flex-wrap max-lg:mt-8 max-lg:justify-center text-secondary">
            {mainLink.map((link) => (
              <li key={link.label}>
                
                <Button
                variant="ghost"
                key={link.label}
                onClick={() => handleLinkClick(link.id)}
                className="text-xs lg:text-sm font-normal  font-rubik hover:opacity-70 p-0"
              >
                {link.label}
              </Button>
              </li>
            ))}
          </ul>
        </div>

      <div
        className={`text-sm text-center flex justify-between items-center max-lg:flex-wrap max-lg:justify-center`}
      >
        <div className="text-[10px] sm:text-sm 2xl:text-lg max-lg:order-2 max-lg:basis-full text-[#FEFEFE]">
          &copy; 2024 DeRent. All Right Reserved
        </div>
        <div className="flex lg:space-x-24 items-center max-lg:flex-wrap max-lg:justify-center">
          <div className="flex space-x-24 max-lg:order-2 max-lg:mb-8">
            <Link to={"/"} className="underline text-extra-[#FEFEFE] max-w-sm:font-normal text-xs sm:text-sm">
              Terms of Use
            </Link>
            <Link to={"/"} className="underline text-extra-[#FEFEFE] max-w-sm:font-normal text-xs sm:text-sm">
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-2 max-lg:basis-full max-lg:mb-6 max-lg:justify-center">
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