import Banner from "@/assets/images/banner.jpg";
import LogixTruck from "@/assets/images/LogixTruck.png";
import { Hero } from "@/components/parts/Hero";
import { Service } from "@/components/parts/Service";
import { Solution } from "@/components/parts/Solution";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
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
      <Solution />
    </div>
  );
};

export default HomePage;
