import React from "react";
import { Card } from "./Card";

export default function About() {
  return (
    <div className="w-full darkpribg py-20">
      <div className="container mx-auto px-3 flex flex-col">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-white text-[33px] font-extrabold">About XIBA INU</span>
        </div>
        <div className="mt-10 relative lg:h-96">
          <div className="mb-5 lg:w-[589px]">
            <Card>
              <div className="text-white text-[25px] font-bold mb-2">Mission</div>
              <div className="text-white text-xl font-normal">
                Our meme token crypto is driven by a clear and ambitious mission
                to revolutionize the way memes are created, shared, and monetized
                on a decentralized platform.
              </div>
            </Card>
          </div>
          <div className="mb-5 lg:w-[589px]">
            <Card>
              <div className="text-white text-[25px] font-bold mb-2">Community</div>
              <div className="text-white text-xl font-normal">
                At the heart of our meme token crypto lies a vibrant and inclusive
                community, where meme enthusiasts and creators come together to
                shape the future of meme culture.
              </div>
            </Card>
          </div>
          <div className="mb-5 lg:w-[589px]">
            <Card>
              <div className="text-white text-[25px] font-bold mb-2">Decentralized</div>
              <div className="text-white text-xl font-normal">
                Embracing the true essence of blockchain technology, our meme
                token crypto operates on a decentralized network, ensuring that no
                single entity controls the fate of the community.
              </div>
            </Card>
          </div>
          <div className="mb-5 lg:w-[589px]">
            <Card>
              <div className="text-white text-[25px] font-bold mb-2">Transparency</div>
              <div className="text-white text-xl font-normal">
                We uphold a commitment to complete transparency, providing our
                community with open access to project updates, financials, and
                decision-making processes to foster trust and accountability.
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
