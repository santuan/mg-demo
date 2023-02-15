import HeroCryptoNative from "@/components/CryptoNative/HeroCryptoNative";
import CryptoNativeArtDevelops from "@/components/CryptoNative/ArtDevelops";
import AboutCtyptoNative from "@/components/CryptoNative/AboutCtyptoNative";
import LockAssets from "@/components/CryptoNative/LockAssets";
import CryptoNativeBestPhase from "@/components/CryptoNative/BestPhase";
import CryptoNativeTokenDistribution from "@/components/CryptoNative/TokenDistribution";

export default function CryptoNativePage() {
  return (
    <div className="w-full pb-24">
      <HeroCryptoNative />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <CryptoNativeArtDevelops />
        <AboutCtyptoNative />
        <LockAssets />
        <CryptoNativeBestPhase />
        <CryptoNativeTokenDistribution/>
      </div>
    </div>
  );
}
