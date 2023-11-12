import { useState } from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigation = [
    { name: "Earn $XIBA", href: "/" },
    { name: "Docs", href: "/" },
  ];
  const handleToggle = () => {
    // setIsNavOpen(!isNavOpen);
    console.log("heeasd")
  };
  return (
    <>
      <div
        className={`px-3 mx-auto max-w-7xl ${montserrat.className} flex justify-between items-center`}
      >
        <img loading="lazy" src="/logo.svg" alt="xiba logo" />
        <button
          className="block lg:hidden"
          onClick={handleToggle}
        >
          <img loading="lazy" src="/burgerMenu.svg" alt="hamburger Menu" />
        </button>
        <div className="hidden lg:flex lg:flex-row lg:justify-end items-center space-x-9">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
      {isNavOpen ? (
        <div className="flex flex-col justify-center items-center space-y-4">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
      ) : null}
    </>
  );
}
