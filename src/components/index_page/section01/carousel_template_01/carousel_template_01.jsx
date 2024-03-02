import React, { useEffect, useState } from 'react';
import * as styles from '../../../../styles/index_page/section01/carousel_template01/carousel_template01.module.css'
import Card from '../card';
import images from '../../../../images';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CarouselTemplate01 = () => {

  const [slidesPerView, setSlidePerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1190 && window.innerWidth > 1000) {
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
          link={"/#carousel_template_01"}
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
          link={"/#carousel_template_01"}
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
          link={"/#carousel_template_01"}
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
          link={"/#carousel_template_01"}
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
          link={"/#carousel_template_01"}
        />
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.scroller}>
        <Swiper
          modules={[Autoplay, Pagination]}
          className={styles.swiper}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          autoplay
          pagination={{ clickable: true, dot: true }}
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