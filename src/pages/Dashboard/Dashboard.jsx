import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import MostPopular from "../../components/MostPopular";
import { Navbar } from "../../components/Navbar";
import ShortByCategory from "../../components/ShortByCategory";
import BottomBar from "../../components/BottomBar";

export function Dashboard() {
  const [address, setAddress] = useState("Mencari lokasi...");

  useEffect(() => {
    if (!navigator.geolocation) {
      setAddress("Geolocation tidak didukung");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          setAddress(data.display_name || "Lokasi ditemukan");
        } catch {
          setAddress("Gagal mendapatkan alamat");
        }
      },
      () => setAddress("Gagal mendapatkan lokasi")
    );
  }, []);

  return (
    <>
      <Navbar active="home" />
      <div className="">
        <section className="hero-section relative">
          <img
            src="/assets/img/herosection.jpg"
            alt="-"
            className="w-full h-56 md:h-80 object-cover"
          />
          <div className="linear-upside-down w-screen h-full absolute top-0"></div>
        </section>

        <div className="relative z-30 flex justify-center -mt-10 mb-4 px-4">
          <div className="bg-main-color px-6 py-5 rounded-xl shadow-lg w-full max-w-lg md:max-w-2xl">
            <div className="flex flex-row justify-between items-center flex-wrap gap-4 md:gap-8 text-white">
              <div className="flex flex-row items-center gap-3 flex-1 min-w-0">
                <span className="bg-white flex items-center justify-center rounded-full p-3 flex-shrink-0">
                  <FaUser className="text-main-color text-lg" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h2 className="font-semibold text-white text-base md:text-lg">
                    Hello, user!
                  </h2>
                  <a
                    href="#"
                    className="font-semibold text-white text-xs underline hover:no-underline transition-all"
                  >
                    Switch user
                  </a>
                </div>
              </div>

              <div className="flex flex-row items-center gap-3 flex-1 min-w-0">
                <span className="bg-white flex items-center justify-center rounded-full p-3 flex-shrink-0">
                  <FaMapMarkerAlt className="text-main-color text-lg" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h2 className="font-semibold text-white text-base md:text-lg">
                    Your Location
                  </h2>
                  <p
                    className="font-medium text-white text-xs truncate"
                    title={address}
                  >
                    {address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="relative bg-white">
          <div
            className="absolute -top-6 left-0 w-full h-6 pointer-events-none"
            style={{
              boxShadow: "0 -12px 24px rgba(255,255,255,0.95)",
            }}
          />
          <div className="max-w-screen-lg mx-auto px-4">
            <MostPopular />
            <ShortByCategory />
          </div>
        </section>
      </div>
    </>
  );
}
