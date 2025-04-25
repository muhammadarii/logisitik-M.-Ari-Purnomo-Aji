import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

type HeroProps = {
  location: string;
  title: string;
  description: string;
  image: StaticImageData;
};

export const Hero: React.FC<HeroProps> = ({
  location,
  title,
  description,
  image,
}) => {
  return (
    <div className="relative lg:w-[1400px] lg:h-[600px] lg:mt-5">
      <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-black/80 rounded-[20px]" />
      <div className="absolute top-[10px] right-[10px] lg:top-[40px] lg:right-[40px] flex flex-row items-center">
        <IoLocationSharp size={25} className="text-white" />
        <p className="bg-white text-black text-[12px] px-2 py-1 font-medium rounded-[20px]">
          {location}
        </p>
      </div>
      <div className="absolute top-[50px] left-[10px] lg:top-[150px] lg:left-[40px]">
        <h1 className="lg:text-[46px] text-white w-[300px] lg:w-[800px] lg:leading-[50px]">
          {title}
        </h1>
        <p className="text-[14px] text-white w-[720px] hidden lg:block">
          {description}
        </p>
        <Link
          href={"/barang"}
          className="flex flex-row shadow-2xl gap-2 items-center justify-center bg-white text-[#031921] text-[12px] text-center w-[120px] py-2 font-bold rounded-[20px] mt-[80px] lg:mt-[100px] hover:border-white hover:border-[1px] hover:bg-[#031921] hover:text-white transition-colors duration-300"
        >
          Get Started
          <FaArrowRight
            size={15}
            className="bg-[#031921] text-white rounded-full w-5 h-5 p-1 flex items-center justify-center"
          />
        </Link>
      </div>
      <Image
        src={image}
        alt="Banner"
        priority
        className="object-cover w-full h-full rounded-[20px]"
      />
    </div>
  );
};
