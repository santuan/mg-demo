import HeroTitle from "../ui/HeroTitle";
import Image from "next/image";

export default function MintProject() {
  return (
    <div
      id="become-curated-artist"
      className="flex flex-col py-20 mx-auto max-w-screen-2xl"
    >
      <HeroTitle subtitle="Mint" accentColor={"text-[#920d3d]"}>
        Enters details below
      </HeroTitle>
      <h3 className="my-6 font-sans font-bold">Select project</h3>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 gap-y-20">
        {TOKENS.map((i) => (
          <div className="relative" key={i.id}>
            <Image
              alt="alt"
              width={1200}
              height={900}
              quality={100}
              className="relative z-0"
              src={`/assets/alejandrotaylor/${i.img}`}
            />
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-start h-32 p-6 bg-gradient-to-b from-transparent to-black/90">
              <h4 className="text-xl text-white ">{i.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div>
        <label className="flex flex-col mt-6">
          <span className="mb-2 font-sans text-sm font-bold">Quantity</span>
          <input
            type="text"
            className="w-full p-3 font-sans text-gray-800 bg-gray-100 md:w-1/2"
            placeholder="1-10"
          />
        </label>
        <span className="flex items-center justify-start my-6">
          124/250 remaining
          <svg
            className="inline-flex ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
          >
            <path
              stroke="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M2.313 4.449A5.336 5.336 0 0 1 12.335 7M1.664 7a5.336 5.336 0 0 0 10.022 2.551"
            />
            <path
              stroke="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4.364 4.449H2.006V2.09M9.637 9.551h2.357v2.358"
            />
          </svg>
        </span>
        <div>
          <button
            type="button"
            className="flex w-56 items-center justify-center py-3 text-white duration-300 bg-[#920d3d] px-9"
          >
            Mint
          </button>
        </div>
      </div>
    </div>
  );
}

const TOKENS = [
  {
    id: 1,
    title: "Garden",
    img: "alejandro1.png",
    status: "sold",
  },
  {
    id: 2,
    title: "The Last​",
    img: "alejandro2.png",
    status: "sold",
  },
  {
    id: 3,
    title: "Sunse",
    img: "alejandro3.png",
    status: "sold",
  },
  {
    id: 4,
    title: "Liquid Pond",
    img: "alejandro4.png",
    status: "sold",
  },
];
