import HeroAlejandroTaylor from "@/components/AlejandroTaylor/HeroAlejandroTaylor";
import TheArtists from "@/components/AlejandroTaylor/TheArtists";

export default function AlejandroTaylorPage() {
  return (
    <div className="w-full pb-24">
      <HeroAlejandroTaylor />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <TheArtists />
      </div>
    </div>
  );
}
