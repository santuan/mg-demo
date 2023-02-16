import Link from "next/link";
import HeaderLink from "@/components/ui/HeaderLink";
export default function SingleCuratedFilters() {
  return (
    <div id="tabs" className="my-20 border-b border-gray-300 scroll-mt-32">
      <div className="flex items-center justify-start gap-6 px-2 py-3 mx-auto text-xs md:text-base md:gap-12 max-w-screen-2xl">
        <HeaderLink url="/curated/oneiroscapes#tabs">
          About the project</HeaderLink>
        <HeaderLink url="/curated/oneiroscapes/the-artist#tabs">
          The artist
        </HeaderLink>
        <HeaderLink url="/curated/oneiroscapes/claim#tabs">
          Sentient claim
        </HeaderLink>
        <HeaderLink url="/curated/oneiroscapes/mint#tabs">
          Mint
        </HeaderLink>
      </div>
    </div>
  );
}
