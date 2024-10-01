import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { IconRightArrow } from "../Icons/Icons";


export function Carousels() {
  return (
    <Carousel className="w-full mt-16">
      <CarouselContent>
        <CarouselItem>
          <div className="flex items-center p-1">
            <div className="text-white basis-3/5">
            <h1 className="text-[110px] leading-[135px] mb-2 font-clashDisplay-regular">Advanced <span className="font-clashDisplay-bold"> AI</span> Powered DeFi <span className="font-clashDisplay-bold text-white/30">Trading Platform</span></h1>
            <p className="pb-4 pt-6">Experience advanced AI & ML powered investing like never before with our fully automated AI-powered robo advisor</p>
            <p>Easily convert your crypto into ETFs, Derivatives and other Real-World Assets</p>
            <div className="flex items-center gap-2 font-satoshi font-bold text-xl mt-16">
                Join Now
                <Button variant="white" shape="circle" className="w-[54px] h-[54px] btn-shadow ml-5"><IconRightArrow/>
            </Button>
            </div>
            </div>
            <div className=" basis-2/5">
                <img src="./AI_Img.png" alt="banner_img"/>
              </div>
          </div>
        </CarouselItem>
        <CarouselItem>
        <div className="flex items-center p-1">
            <div className="text-white basis-3/5">
            <h1 className="text-[110px] leading-[135px] mb-2">Advanced <span className="font-bold"> AI</span> Powered DeFi <span className="font-bold text-white/30">Trading Platform</span></h1>
            <p>Easily convert your crypto into ETFs, Derivatives and other Real-World Assets</p>
            <Button className="flex items-center gap-2">
                Join Now
                <IconRightArrow/>
            </Button>
            </div>
            <div className=" basis-2/5">
                <img src="./AI_Img.png" alt="banner_img"/>
              </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
