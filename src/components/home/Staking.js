import React from "react";

export default function Staking() {
  return (
    <div className="container mx-auto px-3 py-10">
      <div className="w-[1005px] h-[761.86px] px-[53px] py-[58px] bg-orange-300 rounded-[50px] flex-col justify-end items-start gap-[61px] inline-flex">
        <div className="self-stretch h-[372.86px] flex-col justify-start items-start gap-[51px] flex">
          <div className="self-stretch justify-between items-center gap-[255px] inline-flex">
            <div className="grow shrink basis-0 self-stretch relative">
              <img
                className="w-[117.75px] h-[87.86px] left-0 top-0 absolute"
                src="https://via.placeholder.com/118x88"
              />
              <div className="left-[119px] top-[26px] absolute text-center text-black text-3xl font-extrabold">
                XIBA INU
              </div>
            </div>
            <div className="px-5 py-2.5 bg-neutral-950 rounded-[50px] justify-center items-center gap-2.5 flex">
              <div className="text-center text-white text-xl font-bold">
                0x164...a7323
              </div>
            </div>
          </div>
          <div>
            <span className="text-black text-[64px] font-extrabold">60,140</span>
            <span className="text-black text-[64px] font-black"> </span>
            <span className="text-black text-[64px] font-bold">
              EARNED XIBA
              <br />
            </span>
            <span className="text-stone-900 text-opacity-30 text-[64px] font-extrabold">
              2,450
            </span>
            <span className="text-black text-[64px] font-black"> </span>
            <span className="text-stone-900 text-opacity-30 text-[64px] font-bold">
              PER DAY
              <br />
              $0.05 TVL
            </span>
          </div>
        </div>
        <div className="justify-start items-end gap-5 inline-flex">
          <div className="w-[595px] pl-[22px] pr-[50px] py-4 bg-neutral-300 rounded-[30px] flex-col justify-start items-start gap-9 inline-flex">
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <div className="text-right text-black text-[15px] font-normal">
                How much do you want to stake
              </div>
              <div className="text-black text-[64px] font-extrabold">
                10,000
              </div>
              <div className="text-right text-black text-[15px] font-normal">
                +990 XIBA PER DAY
              </div>
            </div>
            <div className="self-stretch justify-between items-end gap-[127px] inline-flex">
              <div className="text-right text-black text-[15px] font-normal">
                Your Staked: 1,244,044 XIBA
              </div>
              <div className="text-right text-black text-xs font-bold underline">
                How It Works
              </div>
              <div className="text-right text-black text-xs font-bold underline">
                Claim
              </div>
            </div>
          </div>
          <div className="px-[90px] py-[87px] bg-zinc-950 rounded-[30px] justify-center items-center gap-2.5 flex">
            <div className="text-center text-white text-3xl font-extrabold">
              STAKE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
