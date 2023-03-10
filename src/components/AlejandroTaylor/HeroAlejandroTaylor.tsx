export default function HeroAlejandroTaylor() {
  return (
    <div
      className="w-full pb-64 bg-no-repeat "
      style={{
        backgroundImage: "url('/assets/alejandrotaylor/back-alejandrotaylor.jpg')",
        backgroundSize: "50vw",
        backgroundPosition: "top right",
      }}
    >
      <div className="grid w-full grid-cols-2 gap-6 px-6 mx-auto max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-[#074F65]">
          Alejandro & Taylor
          </span>
          <h1 className="mt-6 text-3xl lg:text-7xl">
          Meet the Mirage Gallery OGs - Alejandro & Taylor
          </h1>
          <p className="py-4">
          Mirage Gallery was founded on the premise that art can be more than human.
          </p>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex items-center justify-center py-3 text-black duration-300 bg-gray-200 px-9 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                fill="none"
                className="mr-2"
              >
                <path
                  fill="#000"
                  d="m1.309 11.42.077-.122 4.642-7.335a.158.158 0 0 1 .279.02c.775 1.756 1.444 3.94 1.13 5.299-.133.559-.5 1.316-.912 2.016a3.709 3.709 0 0 1-.174.299.157.157 0 0 1-.132.07H1.445a.16.16 0 0 1-.136-.246Z"
                />
                <path
                  fill="#000"
                  d="M22 12.783v1.161c0 .067-.04.126-.099.152-.36.156-1.59.726-2.101 1.445C18.495 17.376 17.497 20 15.268 20h-9.3C2.67 20 0 17.293 0 13.952v-.108a.16.16 0 0 1 .16-.16h5.184c.103 0 .178.096.169.198-.037.34.026.688.185 1.005a1.823 1.823 0 0 0 1.635 1.026H9.9v-2.024H7.363c-.13 0-.207-.152-.132-.26l.091-.136c.24-.345.583-.88.924-1.49.233-.41.459-.85.64-1.29.037-.08.066-.161.096-.24.049-.142.1-.273.137-.405.037-.11.066-.227.095-.337.087-.374.123-.77.123-1.181 0-.161-.007-.33-.022-.49a6.404 6.404 0 0 0-.051-.529 5.52 5.52 0 0 0-.072-.47 8.001 8.001 0 0 0-.146-.704l-.02-.088c-.044-.162-.081-.315-.132-.476a18.1 18.1 0 0 0-.488-1.46c-.064-.183-.138-.359-.211-.535-.108-.265-.218-.505-.319-.733a10.226 10.226 0 0 1-.14-.295c-.049-.109-.1-.218-.152-.322-.036-.08-.078-.154-.108-.228l-.313-.585c-.044-.08.03-.174.115-.15l1.962.537h.006l.007.002.258.072.285.082.104.03V1.03C9.9.46 10.351 0 10.908 0a.99.99 0 0 1 .713.302c.182.187.296.442.296.728v1.748l.209.059a.166.166 0 0 1 .047.024l.219.167c.073.059.152.131.247.205.189.154.414.352.662.58.066.057.13.117.189.176.319.3.676.652 1.017 1.04.095.11.189.221.284.338.096.118.197.235.284.352.116.155.24.316.349.485.051.08.11.16.16.24.139.213.261.434.379.654.05.102.1.213.145.322.13.295.232.595.299.895.02.065.034.135.042.198v.015c.022.089.029.183.036.28a3.018 3.018 0 0 1-.16 1.31c-.043.127-.087.258-.144.382-.11.257-.24.515-.394.755-.05.09-.108.184-.167.273-.064.094-.13.183-.189.27a5.66 5.66 0 0 1-.255.332 3.49 3.49 0 0 1-.247.314c-.123.147-.24.286-.363.419a3.812 3.812 0 0 1-.233.255c-.079.09-.16.169-.233.243-.123.124-.225.22-.311.3l-.202.187a.164.164 0 0 1-.108.04h-1.562v2.025h1.965c.44 0 .858-.158 1.195-.446.116-.102.62-.543 1.216-1.208a.152.152 0 0 1 .075-.046l5.429-1.585a.16.16 0 0 1 .203.155Z"
                />
              </svg>
              View on Opensea
            </button>
            <button
              type="button"
              className="bg-[#074F65] flex justify-center items-center text-white py-3"
            >
              Dashboard
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                className="ml-2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8333 4.99992H1.16663"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66663 9.16667L12.8333 5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66663 0.833252L12.8333 4.99992"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
