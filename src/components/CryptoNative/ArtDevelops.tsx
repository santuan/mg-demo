import Image from "next/image";

export default function CryptoNativeArtDevelops() {
  return (
    <div className="py-24">
      <div className="flex items-center justify-center max-w-3xl mx-auto">
        <Image
          src="/assets/crypto-native/cryptonative-1-art.jpg"
          alt="imagen"
          width={1200}
          height={500}
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}
