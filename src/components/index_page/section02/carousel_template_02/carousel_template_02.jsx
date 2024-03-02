import React, { useEffect, useState } from "react";
import * as styles from "../../../../styles/index_page/section02/carousel_template02/carousel_template02.module.css";
import CarouselTemplateCard02 from "./carousel_template02_card";
import images from "../../../../images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CarouselTemplate02 = () => {

  const [slidePerView, setSlidePerView] = useState(6)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 800) {
        setSlidePerView(1);
      } else {
        setSlidePerView(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, [])
  
  const dataCarousel2 = [
    {
      id: "1",
      content: (
        <CarouselTemplateCard02
          img={images.gav_resorts_logo}
          title={"GAV Resorts"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu rutrum justo. Vestibulum vitae finibus eros, ut luctus augue. Nulla sem dolor, blandit quis efficitur"
          }
        />
      ),
    },
    {
      id: "2",
      content: (
        <CarouselTemplateCard02
          img={images.wam_gestao_logo}
          title={"WAM Gestão"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu rutrum justo. Vestibulum vitae finibus eros, ut luctus augue. Nulla sem dolor, blandit quis efficitur"
          }
        />
      ),
    },
    {
      id: "3",
      content: (
        <CarouselTemplateCard02
          img={images.select_club_logo}
          title={"SELECT Club"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu rutrum justo. Vestibulum vitae finibus eros, ut luctus augue. Nulla sem dolor, blandit quis efficitur"
          }
        />
      ),
    },
    {
      id: "4",
      content: (
        <CarouselTemplateCard02
          img={images.gav_resorts_logo}
          title={"GAV Resorts"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu rutrum justo. Vestibulum vitae finibus eros, ut luctus augue. Nulla sem dolor, blandit quis efficitur"
          }
        />
      ),
    },
    {
      id: "5",
      content: (
        <CarouselTemplateCard02
          img={images.wam_gestao_logo}
          title={"WAM Gestão"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu rutrum justo. Vestibulum vitae finibus eros, ut luctus augue. Nulla sem dolor, blandit quis efficitur"
          }
        />
      ),
    },
    {
      id: "6",
      content: (
        <CarouselTemplateCard02
          img={images.select_club_logo}
          title={"SELECT Club"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu rutrum justo. Vestibulum vitae finibus eros, ut luctus augue. Nulla sem dolor, blandit quis efficitur"
          }
        />
      ),
    },
    {
      id: "7",
      content: (
        <CarouselTemplateCard02
          img={images.gav_resorts_logo}
          title={"GAV Resorts"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu rutrum justo. Vestibulum vitae finibus eros, ut luctus augue. Nulla sem dolor, blandit quis efficitur"
          }
        />
      ),
    },
    {
      id: "8",
      content: (
        <CarouselTemplateCard02
          img={images.wam_gestao_logo}
          title={"WAM Gestão"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu rutrum justo. Vestibulum vitae finibus eros, ut luctus augue. Nulla sem dolor, blandit quis efficitur"
          }
        />
      ),
    },
    {
      id: "9",
      content: (
        <CarouselTemplateCard02
          img={images.select_club_logo}
          title={"SELECT Club"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu rutrum justo. Vestibulum vitae finibus eros, ut luctus augue. Nulla sem dolor, blandit quis efficitur"
          }
        />
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.scroller}>
        <Swiper
          className={styles.swipper}
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={slidePerView}
          autoplay
          pagination
        >
          {dataCarousel2.map((card) => (
            <SwiperSlide key={card.id}>{card.content}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselTemplate02;
