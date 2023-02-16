import Image from "next/image";
import Link from "next/link";
export default function DreamersDrops() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="my-6 text-2xl">Our Drops</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 mx-auto max-w-screen-2xl">
        <Link href="/dreamers/8000-dreamers" className="relative">
          <div className="relative z-0 overflow-hidden h-[500px]">
            <Image
              src="/assets/1.jpg"
              alt="imagen"
              width={600}
              height={500}
              className="object-cover w-full h-[500px]"
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            8000 Dreamers
          </h2>
        </Link>
        <Link className="relative" href="/dreamers/dreaming-a-better-world">
          <div className="relative z-0 overflow-hidden h-[500px]">
            <Image
              src="/assets/2.jpg"
              alt="imagen"
              width={600}
              height={500}
              className="object-cover w-full h-[500px]"
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            Dreaming of a better world
          </h2>
        </Link>
      </div>
    </div>
  );
}
