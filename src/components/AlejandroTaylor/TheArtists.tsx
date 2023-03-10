import Image from "next/image";
import Link from "next/link";
export default function TheArtists() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="my-6 text-2xl">The Artists</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 mx-auto max-w-screen-2xl">
        <Link href="/alejandro-and-taylor/alejandro" className="relative">
          <div className="relative z-0 overflow-hidden h-[600px]">
            <Image
              src="/assets/alejandrotaylor/alejandro.jpg"
              alt="imagen"
              width={600}
              height={500}
              className="object-cover w-full h-[600px]"
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            Alejandro
          </h2>
        </Link>
        <Link href="/alejandro-and-taylor/alejandro" className="relative">
          <div className="relative z-0 overflow-hidden h-[600px]">
            <Image
              src="/assets/alejandrotaylor/taylor.jpg"
              alt="imagen"
              width={600}
              height={500}
              className="object-cover w-full h-[600px]"
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            Taylor
          </h2>
        </Link>
      </div>
    </div>
  );
}
