import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
      <div className="container mx-auto px-3 relative">
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <Image
            width={249}
            height={383}
            src="/img/xibahero.png"
            alt="hero image"
          />
          <div className="text-center">
            <span className="text-white text-[55px] font-extrabold">XIBA </span>
            <span className="text-orange-300 text-[55px] font-extrabold">
              INU
              <br />
            </span>
            <span className="text-orange-300 text-[20px] font-light">
              Shaping the Legacy of Shiba's Lineage&#160;
            </span>
          </div>
        </div>
        <img
          className="absolute -z-10 -left-2/4 -top-3/4"
          src="/icons/backlight.svg"
          alt="backlight"
        />
        <img
          className="absolute -z-10 -right-2/4 -bottom-3/4"
          src="/icons/backlight.svg"
          alt="backlight"
        />
      </div>
  );
}
