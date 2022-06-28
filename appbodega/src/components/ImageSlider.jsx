import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./cargaimg.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const ImageSlider = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  //  const uploadFile = () => {
  //    if (imageUpload == null) return;
  //    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //    uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //      getDownloadURL(snapshot.ref).then((url) => {
  //        setImageUrls((prev) => [...prev, url]);
  //      });
  //    });
  //  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, [setImageUrls]);

  return (
    <div
      className="container"
      style={{
        width: "900px",
        height: "500px",
      }}
    >
      <Swiper
        cssMode={true}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imageUrls.map((url, i) => (
          <SwiperSlide key={i}>
            <img
              style={{
                objectFit: "contain",
              }}
              src={url}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
