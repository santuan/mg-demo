import HeroTitle from "../ui/HeroTitle";
import Image from "next/image";

export default function LockAssets() {
  return (
    <div className="w-full pb-24">
      <HeroTitle subtitle="">
        Each piece will forever lock in place after 10 phases of evolution and
        can&apos;t revert to any of the older phases.
      </HeroTitle>

      <div className="flex items-center justify-center w-full mx-auto">
        <Image
          src="/assets/crypto-native/cryptonative-lock-assets.jpg"
          alt="imagen"
          width={1200}
          height={500}
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}
