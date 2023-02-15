import Image from "next/image";

export default function DreamersFourDifferentCreators() {
  return (
    <div className="py-24">
      <div className="mx-auto">
        <h2 className="my-6 text-xl">4 Different Creators</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 mx-auto md:grid-cols-4">
        {CREATORS.map((i: any) => (
          <div className="relative" key={i}>
            <div className="relative z-0 overflow-hidden aspect-square">
              <Image
                src={`${i.img}`}
                alt="imagen"
                width={600}
                height={500}
                className="object-cover w-full h-[500px]"
              />
            </div>
            <h2 className="w-full py-3 text-xl">{i.title}</h2>
            <span className="text-xs">
              {i.value1} <span className="text-gray-600">/ {i.value1}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const CREATORS = [
  {
    title: "Model 1",
    img: "/assets/1.jpg",
    value1: "1500",
    value2: "8000",
  },
  {
    title: "Model 2",
    img: "/assets/2.jpg",
    value1: "5875",
    value2: "8000",
  },
  {
    title: "Dallee",
    img: "/assets/3.jpg",
    value1: "500",
    value2: "8000",
  },
  {
    title: "@wheattreat",
    img: "/assets/4.jpg",
    value1: "100",
    value2: "8000",
  },
];
