import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import MapTempat from "../../components/Map";
import Carousel from "../../components/Carousel";
import Ratings from "../../components/Ratings";
import RatingInput from "../../components/RatingInput";

export function DetailPlace(){
    const [umkm, setUmkm] = useState([]);
    const {id_tempat} = useParams()

    const ratingData = {
    rating: 4.6,
    totalReview: 128,
    breakdown: {
      5: 75,
      4: 18,
      3: 5,
      2: 1,
      1: 1
    }
  };

  useEffect(() => {
    fetch("/data/umkm.json")
      .then(res => res.json())
      .then(data => {
        setUmkm(data[id_tempat-1]);
      })
      .catch(err => console.error("Gagal memuat data:", err));
  }, []);

  return (
    <main className="font-rubik">
      <section className="hero">
        <img src="https://placehold.co/800@2x.png" alt="-" />
      </section>
      <section className="p-4 pb-8 shadow-xl rounded-b-3xl ">
        <div className="header-sec">
          <h1 className="text-3xl max-w-3/5 font-bold mb-4">{umkm.nama}</h1>
        </div>
        <div className="body-sec flex justify-between gap-3">
          <div className="points w-3/5 ">
              <div className="main-points">
                <div className="body-item flex items- justify-between">
                  <span className="icon min-w-1/6 "><img className="" src="https://placehold.co/40x40" alt="" /></span>
                  <p className="font-medium ps-2  w-9/12" >{umkm.alamat}</p>
                </div>
                <div className="body-item flex items- justify-between">
                  <span className="icon min-w-1/6 "><img className="" src="https://placehold.co/40x40" alt="" /></span>
                  <p className="font-regular ps-2 w-9/12 " >{umkm.jam_buka}</p>
                </div>
              </div>
              <div className="sub-points grid grid-cols-2 gap-2 pt-3">
                  {umkm.fasilitas && umkm?.fasilitas.map((item, i) => (
                    <div className="sub-point flex items-center " key={i}>
                      <img className="icon-sub-point" src="https://placehold.co/20x20" />
                      <p className="text-sub-point text-xs mx-2">{item}</p>
                    </div>
                  ))}
              </div>
          </div>
          <div className="maps rounded-xl w-2/5  overflow-hidden">
              <MapTempat latitude={umkm.latitude} longitude={umkm.longitude} />
          </div>
        </div>
      </section>

        {umkm.produk_unggulan && (
          <section className="produk-unggulan border-b p-4">
            <h1 className="text-2xl font-bold underline text-center p-5">
              Produk Unggulan
            </h1>
            
              <Carousel produk={umkm.produk_unggulan} />
          </section>
        )}

        <section className="deskripsi border-b p-4">
            <h1 className="text-2xl font-bold underline text-center p-5">
              Deskripsi
            </h1>
            
              <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur sequi accusantium veniam sapiente commodi ea quidem harum provident saepe quasi eius necessitatibus odit facere itaque blanditiis aut tempore officia.</p>
          </section>

        <section className="rating border-b my-3">
          <h1 className="text-2xl font-bold underline text-center p-5">
              Rating & Ulasan
          </h1>
          <div className="rating-box flex justify-center">
            <Ratings 
            rating={ratingData.rating}
            totalReview={ratingData.totalReview}
            breakdown={ratingData.breakdown}
            />
          </div>
          
          <div className="review p-5">
              <RatingInput />
          </div>
        </section>

      {/* <ul>
        {umkm.map(item => (
          <li key={item.id} className="mb-2">
            <strong>{item.nama}</strong> — {item.kategori}
          </li>
        ))}
      </ul> */}
    </main>
  );
}