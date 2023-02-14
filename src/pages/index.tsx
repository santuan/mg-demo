import HomeHero from "@/components/Home/HomeHero";
import HomeCuratedImages from "@/components/Home/HomeCuratedImages";
import HomeOurDrops from "@/components/Home/HomeOurDrops";
import HeroTitle from "@/components/ui/HeroTitle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeOurDrops />
      <div className="w-full px-2 space-y-64 max-w-screen-2xl">
        <section className="pt-64">
          <HeroTitle subtitle="What is Mirage?" accentColor={""}>
            Mirage Gallery was founded on the premise that art can be
            <span className="text-[#808080]"> more than human.</span>
          </HeroTitle>
        </section>
        <section>
          <HeroTitle
            subtitle="ALEJANDRO & TAYLOR"
            accentColor={"text-[#074f65]"}
          >
            Mirage Gallery started with creating entirely{" "}
            <span className="text-[#074f65] underline">
              A.I. generated artists.
            </span>
          </HeroTitle>
          <p className="mx-auto text-lg text-gray-600 md:text-3xl ">
            Each part of the artists below - from their artwork to their
            headshot and biography - has been generated by artificial
            intelligence.
          </p>
        </section>
        <section>
          <HeroTitle subtitle="CRYPTO NATIVE" accentColor={"text-[#431281]"}>
            With{" "}
            <Link href="/crypto-native" className="text-[#431281] underline">
              Crypto-Native
            </Link>
            , the artwork evolves when a secondary sale happens.
          </HeroTitle>
          <p className="mx-auto text-lg text-gray-600 md:text-3xl ">
            Instead of just trading the same JPEG back and forth, you only get
            to own a unique step in the 10 phases of evolution for a piece.
          </p>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 w-96 bg-gradient-to-r from-white via-white/30 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-96 bg-gradient-to-l from-white via-white/30 to-transparent" />
            <HomeCuratedImages />
          </div>
          <div className="flex items-center justify-start mt-6">
            <Link
              href="/crypto-native"
              className="bg-[#431281] flex px-6 py-4 items-center justify-center text-white"
            >
              Explore crypto native
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
                width="14"
                height="10"
                fill="none"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.833 5H1.167M8.667 9.167 12.833 5M8.667.833 12.833 5"
                />
              </svg>
            </Link>
          </div>
        </section>
        <section>
          <HeroTitle subtitle="CURATED" accentColor={"text-[#920d3d]"}>
            Mirage Gallery has now expanded and works with other artists (not
            A.I. generated ones) with{" "}
            <Link href="/curated" className="text-[#920d3d] underline">
              Mirage Gallery Curated.
            </Link>
          </HeroTitle>
          <p className="mx-auto text-lg text-gray-600 md:text-3xl ">
            Mirage Gallery Curated is building an astounding collection of A.I.
            from artists around the world.
          </p>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 w-96 bg-gradient-to-r from-white via-white/30 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-96 bg-gradient-to-l from-white via-white/30 to-transparent" />
            <HomeCuratedImages />
          </div>
          <div className="flex items-center justify-start mt-6">
            <Link
              href="/curated"
              className="bg-[#920d3d] flex px-6 py-4 items-center justify-center text-white"
            >
              Explore curated
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
                width="14"
                height="10"
                fill="none"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.833 5H1.167M8.667 9.167 12.833 5M8.667.833 12.833 5"
                />
              </svg>
            </Link>
          </div>
        </section>
        <section>
          <HeroTitle subtitle="Dreamers" accentColor={"text-[#1129aa]"}>
            The artistic intersection of humans and artificial intelligence. We
            are <span className="text-[#1129aa] underline">Dreamers.</span>
          </HeroTitle>
          <p className="mx-auto text-lg text-gray-600 md:text-3xl ">
            Each Dreamer is the combination of traditional fine-art, machine
            learning, and collectibles.
          </p>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 w-96 bg-gradient-to-r from-white via-white/30 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-96 bg-gradient-to-l from-white via-white/30 to-transparent" />
            <HomeCuratedImages />
          </div>
          <div className="flex items-center justify-start mt-6">
            <Link
              href="/dreamers"
              className="bg-[#1129aa] flex px-6 py-4 items-center justify-center text-white"
            >
              Explore dreamers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
                width="14"
                height="10"
                fill="none"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.833 5H1.167M8.667 9.167 12.833 5M8.667.833 12.833 5"
                />
              </svg>
            </Link>
          </div>
        </section>
        <section>
          <HeroTitle subtitle="Memberships" accentColor={"text-[#e2b310]"}>
            Mirage Gallery also offers{" "}
            <span className="text-[#e2b310] underline">Memberships</span> which
            give early access to curated drops, and more.
          </HeroTitle>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="w-full bg-gray-900 h-96"></div>
              <h3 className="mt-3 text-2xl">Intelligent member</h3>
            </div>
            <div>
              <div className="w-full bg-gray-900 h-96"></div>
              <h3 className="mt-3 text-2xl">Sentient member</h3>
            </div>
          </div>
          <div className="flex items-center justify-start mt-12 mb-32">
            <Link
              href="/membership"
              className="bg-[#e2b310] flex px-6 py-4 items-center justify-center"
            >
              Explore memberships
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
                width="14"
                height="10"
                fill="none"
              >
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.833 5H1.167M8.667 9.167 12.833 5M8.667.833 12.833 5"
                />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
