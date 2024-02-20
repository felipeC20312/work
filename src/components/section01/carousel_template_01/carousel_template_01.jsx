import React, { useEffect, useState } from 'react';
import Card from '../card';
import * as styles from '../../../styles/section01/carousel_template01/carousel_template01.module.css'
import images from '../../../images';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const CarouselTemplate01 = () => {

  const [slidesPerView, setSlidePerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1730 && window.innerWidth > 1195) {
        setSlidePerView(2);
      } else if (window.innerWidth <= 800) {
        setSlidePerView(1);
      } else {
        setSlidePerView(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    {
      id: "1",
      content: (
        <Card
          logo={images.crm_dynamics_365_logo}
          title={"CRM Dynamics 365"}
          description={"UI/UX Desing for the login page"}
          link={"/"}
        />
      ),
    },
    {
      id: "2",
      content: (
        <Card
          logo={images.power_platform_logo}
          title={"Power Platform"}
          description={"UI/UX Desing for the login page"}
          link={"/"}
        />
      ),
    },
    {
      id: "3",
      content: (
        <Card
          logo={images.vize_conecta_logo}
          title={"Vize Conecta"}
          description={"UI/UX Desing for the login page"}
          link={"/"}
        />
      ),
    },
    {
      id: "4",
      content: (
        <Card
          logo={images.vize_cloud_logo}
          title={"Vize Cloud"}
          description={"Sua opção para soluções em Cloud computing"}
          link={"/"}
        />
      ),
    },
    {
      id: "5",
      content: (
        <Card
          logo={images.integracao_erp_logo}
          title={"Integração ERP"}
          description={"UI/UX Desing for the login page"}
          link={"/"}
        />
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.scroller}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          autoplay
        >
          {data.map((cards) => (
            <SwiperSlide key={cards.ids}>{cards.content}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default CarouselTemplate01;