import BecomeCuratedArtist from "@/components/Curated/BecomeCuratedArtist";
import CuratedGallery from "@/components/Curated/CuratedGallery";
import CuratedHero from "@/components/Curated/CuratedHero";
import MintProject from "@/components/Curated/MintProject";

export default function CuratedPage() {
  return (
    <div className="w-full pb-24">
      <CuratedHero />
      <CuratedGallery />
      <BecomeCuratedArtist/>
      <MintProject/>
    </div>
  );
}
