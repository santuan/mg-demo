import HeroSoldOut from "@/components/Curated/HeroSoldOut";
import SingleCuratedFilters from "@/components/Curated/SingleCurated/CuratedFilters";
export default function CuratedClakimPage() {
  return (
    <div className="w-full pb-24">
      <HeroSoldOut />
      <SingleCuratedFilters />

      <div className="grid w-full px-2 mx-auto max-w-screen-2xl md:grid-cols-2">
        <div className="">
          <h2 className="text-2xl text-left">Claim</h2>
          <div>
            <p className="my-3 font-sans">
              This page is for Sentient Members to claim their token from Mirage
              Gallery Curated drops OR for individuals to check status of
              existing memberships.
            </p>
            <ul>
              <li className="my-3 font-sans">
                Claiming opens when the presale begins for a project.
              </li>
              <li className="my-3 font-sans">
                Connect wallet below to claim your artwork or check status of an
                existing membership.
              </li>
            </ul>
            <div className="mt-6">
              <label className="flex flex-col">
                <span className="mb-2 font-sans">Project</span>
                <input
                  type="text"
                  className="w-full p-3 font-sans text-gray-800 bg-gray-100"
                  placeholder="Oneiroscapes"
                />
              </label>
            </div>
            <div className="flex flex-col gap-6 my-6 md:flex-row">
              <label className="flex flex-col w-full ">
                <span className="mb-2 font-sans">Input membership ID</span>
                <input
                  type="number"
                  className="p-3 font-sans text-gray-800 bg-gray-100"
                  placeholder="(0-49)"
                />
              </label>
              <label className="flex flex-col ">
                <span className="mb-2 font-sans">Quantity</span>
                <input
                  type="number"
                  className="p-3 font-sans text-gray-800 bg-gray-100"
                  placeholder="1"
                />
              </label>
            </div>
            <div>
              <button
                type="button"
                className="flex items-center justify-center py-3 text-white duration-300 bg-[#920d3d] px-9"
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
