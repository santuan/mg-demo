import Image from "next/image";
import HeroTitle from "@/components/ui/HeroTitle";

export default function MembershipBenefits() {
  return (
    <>
      <div className="py-20 ">
        <HeroTitle subtitle="Benefits" accentColor={"text-[#e2b310]"}>
          These membership tokens allow:
        </HeroTitle>
        <ul className="flex flex-col space-y-4 text-xl md:w-1/2">
          <li className="flex items-center justify-start">
            <span className="inline-flex items-center justify-center w-20 h-20 mr-6 border border-gray-300 rounded-full min-w-[5rem]">1</span>
            <p className="w-full">All holders to have early access to MG Curated minting</p>
          </li>
          <li className="flex items-center justify-start">
            <span className="inline-flex items-center justify-center w-20 h-20 mr-6 border border-gray-300 rounded-full min-w-[5rem]">2</span>
            <p className="w-full">Automatic entry in giveaways</p>
          </li>
          <li className="flex items-center justify-start">
            <span className="inline-flex items-center justify-center w-20 h-20 mr-6 border border-gray-300 rounded-full min-w-[5rem]">3</span>
            <p className="w-full">Surprise future airdrops</p>
          </li>
          <li className="flex items-center justify-start">
            <span className="inline-flex items-center justify-center w-20 h-20 mr-6 border border-gray-300 rounded-full min-w-[5rem]">4</span>
            <p className="w-full"><span className="text-[#e2b310]">Sentient members</span> will even get to claim 1 free piece from every MG
            Curated drop at any point in time!</p>
          </li>
        </ul>
      </div>
    </>
  );
}
