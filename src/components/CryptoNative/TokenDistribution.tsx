import HeroTitle from "../ui/HeroTitle";

export default function CryptoNativeTokenDistribution() {
  return (
    <div className="relative py-24">
      <HeroTitle subtitle="Token distribution" accentColor={"text-[#431281]"}>
        How we distribute the tokens
      </HeroTitle>
      <div className="grid gap-6 md:grid-cols-4">
          {TOKENS.map((i) => (
            <div className="" key={i.id}>
              <h4 className="text-[#431281] my-3 text-sm">{i.title}</h4>
              <p className="font-sans text-base">{i.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

const TOKENS = [
  {
    id: 1,
    title: "TOKENS 0 - 49​",
    description: "Airdropped to founding team and friends",
  },
  {
    id: 2,
    title: "TOKENS 50 - 59​",
    description: "Reserved for exclusive OpenSea auction",
  },
  {
    id: 3,
    title: "TOKENS 51 - 979",
    description: "Minting occurs on MG site through September 1st 2021",
  },
  {
    id: 4,
    title: "TOKENS 980 - 999",
    description: "Collectors select final pieces to be auctioned - Date TBD",
  },
];
