import AlejandroHero from "@/components/AlejandroTaylor/AlejandroHero";
import HeroSoldOut from "@/components/Curated/HeroSoldOut";
import Image from "next/image";
import Link from "next/link";
export default function SoldOutPagePage() {
  return (
    <div className="w-full pb-24">
      <HeroSoldOut />
      <div className="my-20 border-b border-gray-300">
        <div className="flex items-center justify-start gap-12 px-2 py-3 mx-auto max-w-screen-2xl">
          <Link
           href="/curated/oneiroscapes" className="text-[#920d3d]">
            About the project
          </Link>
          <Link href="" className="text-[#808080]">The artist</Link>
          <Link href="" className="text-[#808080]">Sentient claim </Link>
        </div>
      </div>
      <div className="px-2 mx-auto max-w-screen-2xl">
        <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
          <h2 className="text-2xl text-left">About the project</h2>
        </div>
        <div className="h-[500px] overflow-hidden my-6 relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/60">
            <div className="w-20 h-20 duration-300 cursor-pointer hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                fill="none"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M76.5 39v0c0 20.712-16.788 37.5-37.5 37.5v0C18.288 76.5 1.5 59.712 1.5 39v0C1.5 18.288 18.288 1.5 39 1.5v0c20.712 0 37.5 16.788 37.5 37.5Z"
                  clip-rule="evenodd"
                />
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m34.586 26.742 16.175 9.567c2.046 1.208 2.046 4.17 0 5.379l-16.175 9.566c-2.084 1.234-4.717-.27-4.717-2.691v-19.13c0-2.42 2.633-3.924 4.717-2.691v0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <Image
            src="/assets/2.jpg"
            alt="imagen"
            width={1200}
            height={500}
            className="object-cover w-full"
          />
        </div>
        <p className="max-w-6xl mr-auto">
          The Oneiroscapes collection explores the realm of dreams through a
          collaboration between an artist and an AI. Transcribed for your
          viewing, these dreamscapes capture the surreal and ever-shifting
          nature of our subconscious mind. Imagine a dream where reality appears
          familiar, yet, upon closer inspection, the details become increasingly
          nonsensical: the writing on a sign, the face of a companion, all
          seemingly taking on new and strange forms. These dreams can be most
          accurately shared through imagery, and working with AI provides the
          perfect medium to capture and interpret them.Describing a dream is
          akin to exploring latent space with AI, where every possible scene
          exists if the right sequence of words is combined to conjure it. The
          human form may be distorted, fingers may be too many, and faces may be
          unlike any you&apos;ve seen before. But that is what makes the
          experience all the more satisfying, as both the artist and the viewer
          participate in the creation of this art by giving each symbol a
          meaning and label, even if it doesn&apos;t make sense in the waking
          world.
        </p>
      </div>
    </div>
  );
}
