import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import Image from "next/image";

const images = [
  "/assets/images/award/bk-award-1.jpg",
  "/assets/images/award/bk-award-3.jpg",
  "/assets/images/award/bk-award-2.jpg",
];
const ImagesSection = () => {
  return (
    <Splide
      options={{
        type: "loop",
        focus: "center",
        autoplay: true,
        gap:60,
        autoWidth: true,
        arrows: true,
      }}
      className="w-full"
      aria-label="My Favorite Images"
    >
      {images.map((image, index) => {
        return (
          <SplideSlide key={index}>
            <Image
              src={image}
              height={500}
              width={500}
              className="md:h-96 h-64 w-auto"
              alt="feature-image"
            />{" "}
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default ImagesSection;
