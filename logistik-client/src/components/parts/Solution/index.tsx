import Image from "next/image";
import CargoPlane from "@/assets/images/CargoPlane.jpg";
import SeaCargo from "@/assets/images/SeaCargo.jpg";
import RailCargo from "@/assets/images/RailCargo.jpg";
import RoadCargo from "@/assets/images/RoadCargo.jpg";

const Data = [
  {
    id: 1,
    image: CargoPlane,
    title: "Air Freight",
    description:
      "Fast, reliable shipping for high-priority items accross the globe.",
  },
  {
    id: 2,
    image: SeaCargo,
    title: "Sea Freight",
    description:
      "Cost-effective solutions for bulk goods, with extensive port-to-port coverage.",
  },
  {
    id: 3,
    image: RailCargo,
    title: "Rail Freight",
    description:
      "Economical and friendly environmental, ideal for large volumes and long distances.",
  },
  {
    id: 4,
    image: RoadCargo,
    title: "Road Freight",
    description:
      "Efficient transportation for regional shipments with flexible schedules.",
  },
];

export const Solution = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-row items-center gap-4 ">
        <div className="bg-red-500 w-3 h-3 rounded-full" />
        <p className="text-[14px] font-light bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-widest">
          OUR FREIGHT SOLUTION
        </p>
      </div>
      <h1 className="lg:text-[32px] font-light mt-2 text-center lg:w-[600px]">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Expertly Managing
        </span>{" "}
        Every Step From Transit {""}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          to Warehouseing
        </span>
      </h1>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 mt-10">
        {Data.map((item) => (
          <div
            key={item.id}
            className="relative w-screen h-[300px] lg:w-[400px] lg:h-[300px] px-4 lg:px-0"
          >
            <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500/50 via-indigo-500/50 to-transparent rounded-2xl" />
            <Image
              src={item.image}
              alt="image"
              priority
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute top-[20px] left-[20px]">
              <span className="bg-white/40 backdrop-blur-lg text-white text-[12px] px-2 py-1 font-light rounded-[20px]">
                {item.title}
              </span>
              <h1 className="lg:text-[20px] font-semibold mt-10 w-[250px] lg:w-fit">
                {item.description}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
