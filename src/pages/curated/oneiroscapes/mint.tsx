import HeroSoldOut from "@/components/Curated/HeroSoldOut";
import SingleCuratedFilters from "@/components/Curated/SingleCurated/CuratedFilters";
export default function CuratedMintPage() {
  return (
    <div className="w-full pb-24">
      <HeroSoldOut />
      <SingleCuratedFilters />
      <div className="grid w-full px-2 mx-auto max-w-screen-2xl md:grid-cols-2">
        <div className="">
          <h2 className="text-2xl text-left">Mint</h2>
          <div className="flex flex-col gap-6 mb-6">
            <label className="flex flex-col mt-6">
              <span className="mb-2 font-sans">Project</span>
              <input
                type="text"
                className="w-full p-3 font-sans text-gray-800 bg-gray-100"
                placeholder="Oneiroscapes"
              />
            </label>
            <label className="flex flex-col w-full mt-6">
              <span className="mb-2 font-sans">Quantity</span>
              <input
                type="number"
                className="p-3 font-sans text-gray-800 bg-gray-100"
                placeholder="1-10"
              />
            </label>
          </div>
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
              className="flex items-center justify-center py-3 text-white duration-300 bg-[#920d3d] px-9"
            >
              Mint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
