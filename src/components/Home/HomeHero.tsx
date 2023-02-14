import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import { GALLERY } from "@/utils/gallery";

export default function HomeHero() {
  return (
    <div className="relative z-10 w-full min-h-[70vh] md:min-h-screen border-b border-gray-200">
      <div className="px-2 mx-auto max-w-screen-2xl">
        <h1 className="text-3xl leading-normal lg:text-[96px] leading-[112px] my-6">
          A new generation of <span className="text-[#808080]">art.</span>
        </h1>
        <Swiper spaceBetween={50} slidesPerView={1}>
          {GALLERY.map((i) => (
            <SwiperSlide key={i.id}>
              <div className="">
                <div className="h-64 md:h-[500px] overflow-hidden w-full">
                  <Image
                    alt="alt"
                    width={1200}
                    height={900}
                    quality={100}
                    placeholder="blur"
                    className="object-cover w-full"
                    blurDataURL={`/assets/blur-${i.img}`}
                    src={`/assets/${i.img}`}
                  />
                </div>
                <div className="flex justify-between w-full mt-12">
                  <span className="px-3 py-2 text-sm bg-gray-100">
                    Featured drop
                  </span>
                  <span className="flex items-center justify-center px-3 py-2 text-white bg-black">
                    View drop
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      className="ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 6H1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 11L15 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 1L15 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <h2 className="my-6 text-3xl">Oneiroscapes</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
