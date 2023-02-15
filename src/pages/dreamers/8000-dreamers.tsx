import DreamersCollectionHero from "@/components/Dreamers/DreamersCollectionHero";
import DreamersFourDifferentCreators from "@/components/Dreamers/DreamersFourDifferentCreators";
import DreamersTheProcess from "@/components/Dreamers/DreamersTheProcess";
import HeroTitle from "@/components/ui/HeroTitle";

export default function EightThousandDreamersPage() {
  return (
    <div className="w-full pb-24">
      <DreamersCollectionHero />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <DreamersFourDifferentCreators />
      </div>
      <DreamersTheProcess />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <HeroTitle subtitle="">
          Dreamers are all around us. When surrounded by darkness, Dreamers see
          the light.
        </HeroTitle>
        <HeroTitle subtitle="">
          Are you a <span className="text-[#1129aa] underline">Dreamers?</span>
        </HeroTitle>
      </div>
    </div>
  );
}
