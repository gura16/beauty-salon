
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const photos = [
  {
    id: 1,
    image: "/images/style-1.jpg",
    title: "სადღესასწაულო ვარცხნილობა",
  },
  {
    id: 2,
    image: "/images/style-2.jpg",
    title: "თმის შეღებვა",
  },
  {
    id: 3,
    image: "/images/style-3.jpg",
    title: "თმის შეჭრა",
  },
];

function Gallery() {
  return (
      <section className="gallery-section" id="gallery">
  <span className="section-label">OUR WORK</span>
  <h2>ჩვენი ნამუშევრები</h2>

  {/* აქ იწყება სლაიდერი */}
  <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    loop={true}
    speed={800}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    navigation={true}
    pagination={{ clickable: true }}
    className="gallery-swiper"
  >
    {photos.map((photo) => (
      <SwiperSlide key={photo.id}>
        <div className="gallery-card">
          <img src={photo.image} alt={photo.title} />
          <h3>{photo.title}</h3>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  {/* აქ მთავრდება სლაიდერი */}
</section>
    
  );
}

export default Gallery;
