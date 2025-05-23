import Banner from "@/assets/images/banner.jpg";
import LogixTruck from "@/assets/images/LogixTruck.png";
import { Footer } from "@/components/parts/Footer";
import { Hero } from "@/components/parts/Hero";
import { Service } from "@/components/parts/Service";
import { Solution } from "@/components/parts/Solution";
import { Data } from "@/components/parts/Solution/data";

const HomePage = () => {
  return (
    <div className="flex flex-col mx-auto container">
      <div className="flex flex-col items-center justify-center px-2 lg:px-20">
        <Hero
          location="Jakarta, Indonesia"
          title="Kelola Barang Masuk & Keluar dengan Mudah dan Efisien"
          description="Pantau pergerakan stok secara real-time, kurangi human error, dan
            tingkatkan efisiensi operasional dengan sistem manajemen terpusat yang
            dirancang khusus untuk kebutuhan bisnis Anda."
          image={Banner}
        />
        <Service
          title="LOGIX AT YOUR SERVICE"
          vision="Menjadi solusi digital terpercaya dalam pengelolaan barang yang
                efisien, akurat, dan real-time untuk mendukung produktivitas dan
                pertumbuhan bisnis."
          mision="Menjadi solusi digital terpercaya dalam pengelolaan barang yang
                efisien, akurat, dan real-time untuk mendukung produktivitas dan
                pertumbuhan bisnis."
          image={LogixTruck}
        />
        <Solution title="OUR FREIGHT SOLUTION" data={Data} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
