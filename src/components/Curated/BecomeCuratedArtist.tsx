import HeroTitle from "../ui/HeroTitle";
import Image from "next/image";

export default function BecomeCuratedArtist() {
  return (
    <div
      id="become-curated-artist"
      className="flex flex-col py-20 mx-auto max-w-screen-2xl"
    >
      <HeroTitle subtitle="Apply" accentColor={"text-[#920d3d]"}>
        Become a curated artist
      </HeroTitle>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <label className="flex flex-col mt-6">
            <span className="mb-2 font-sans text-sm font-bold">Name*</span>
            <input
              type="text"
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              placeholder="Ela Fitzgerlad"
            />
          </label>
          <label className="flex flex-col mt-6">
            <span className="mb-2 font-sans text-sm font-bold">
              Twitter handle
            </span>
            <input
              type="text"
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              placeholder="@ElaFitzgerlad"
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">Email*</span>
            <input
              type="email"
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              placeholder="elafitzgerlad@gmail.com"
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              Link to example works*
            </span>
            <input
              type="email"
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              placeholder="www.link.com "
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              What is unique about your work that other artists (who use AI)
              haven’t done before? *
            </span>
            <textarea
              placeholder="My work is epic because"
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
            ></textarea>
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              In what ways do use AI in your artworks?*
            </span>
            <textarea
              placeholder="To generat epic stuff"
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
            ></textarea>
          </label>
          <div className="md:col-span-2">
            <label className="block mb-2 font-sans text-sm font-bold">
              Would you prefer contact via Twitter or Email?
            </label>
            <div className="grid w-1/2 grid-cols-2 gap-3 ">
              <div className="flex items-center justify-center gap-2 py-2 text-sm bg-gray-100 border border-gray-300 cursor-pointer hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  fill="none"
                >
                  <path
                    fill="#000"
                    d="M12.3 4.233a.5.5 0 0 0-1 0h1ZM1.404 8.738a.5.5 0 1 0-.808.59l.808-.59Zm-.489-.197a.5.5 0 1 0 .17.985l-.17-.985ZM2.8 8.433l.159.474a.5.5 0 0 0 .196-.825l-.355.351Zm-.6-7.2.44-.236a.5.5 0 0 0-.847-.055l.407.291Zm3.6 3-.118.486a.5.5 0 0 0 .618-.47l-.5-.016Zm5.4-1.8-.417.275a.5.5 0 0 0 .417.225v-.5Zm1.8 0 .416.278A.5.5 0 0 0 13 1.933v.5Zm-1.616 1.523a.5.5 0 1 0 .832.555l-.832-.555Zm-.084.277c0 2.008-.573 3.68-1.6 4.844-1.02 1.156-2.527 1.856-4.5 1.856v1c2.227 0 4.02-.8 5.25-2.194 1.223-1.386 1.85-3.314 1.85-5.506h-1Zm-6.1 6.7c-1.104 0-1.842-.285-2.397-.678-.57-.403-.978-.94-1.4-1.517l-.807.59c.417.57.91 1.234 1.63 1.744.735.52 1.678.861 2.974.861v-1ZM1.085 9.526a.51.51 0 0 0 .046-.01l.012-.004.013-.003a2.274 2.274 0 0 0 .083-.028l.208-.068a445.564 445.564 0 0 0 1.435-.48l.057-.019.015-.005.004-.001-.158-.475-.159-.474H2.64l-.004.002-.015.005-.056.019-.202.067a1323.547 1323.547 0 0 1-1.505.502l.003-.001a.45.45 0 0 1 .054-.012l.17.985Zm2.07-1.444c-1.829-1.85-1.966-4.578-.548-6.558L1.793.942C.1 3.31.266 6.582 2.445 8.785l.71-.703ZM1.76 1.47c.786 1.463 2.266 2.847 3.922 3.25l.236-.973C4.606 3.43 3.33 2.28 2.64.997l-.88.473ZM6.3 4.25c.025-.758.292-1.384.716-1.817.422-.43 1.025-.7 1.784-.7v-1c-1.009 0-1.876.365-2.499 1-.62.634-.968 1.508-1 2.484l.999.033Zm2.5-2.517c.537 0 .93.102 1.233.263.3.161.542.397.75.712l.835-.55a3.05 3.05 0 0 0-1.115-1.044C10.028.861 9.466.734 8.8.734v1Zm2.4 1.2H13v-1h-1.8v1Zm1.384-.777-1.2 1.8.832.555 1.2-1.8-.832-.555Z"
                  />
                </svg>
                Twitter
              </div>
              <div className="flex items-center justify-center gap-2 py-2 text-sm bg-gray-100 border border-gray-300 cursor-pointer hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  fill="none"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.497 4.96.761-.515c.467-.316.747-.844.747-1.409v0c0-.94-.762-1.703-1.702-1.703H2.707c-.94 0-1.702.762-1.702 1.703v0c0 .565.28 1.093.747 1.41l.76.515a8.007 8.007 0 0 0 8.985 0v0Z"
                    clip-rule="evenodd"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M1 3.036v6.297a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3.036"
                  />
                </svg>
                Email
              </div>
            </div>
          </div>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              Anything else you’d like to add?
            </span>

            <textarea
              placeholder="Nope"
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
            ></textarea>
          </label>
          <div>
            <button
              type="button"
              className="flex w-56 items-center justify-center py-3 text-white duration-300 bg-[#920d3d] px-9"
            >
              Apply
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12">
          <Image
            src="/assets/curated/become-a-curated-artist.jpg"
            alt="imagen"
            width={1000}
            height={1000}
            className="object-cover h-full mb-12 shadow-2xl md:w-[565px]"
          />
        </div>
      </div>
    </div>
  );
}
