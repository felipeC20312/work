import React, { useEffect, useState } from 'react';
import * as styles from '../../../styles/crm_dynamics_lp/section02/banner_template.module.css'
import images from '../../../images';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const BannerTemplate = () => {
  const [slidePerView, setSlidePerView] = useState(4);

  let _window = false

  useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 1820 && window.innerWidth > 1454) {
          setSlidePerView(4);
        } else if (window.innerWidth < 1454) {
          setSlidePerView(2);
          _window = true;
        } else {
          setSlidePerView(4);
        }
      }
    }

    handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const data = [
    {
      id: 1,
      content: (
        <div className={styles.container_cards_img}>
          <img src={images.gav_resorts_logo_alt1} alt="" />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className={styles.container_cards_img}>
          <img src={images.wam_gestao_logo_alt1} alt="" />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className={styles.container_cards_img}>
          <img src={images.gav_resorts_logo_alt1} alt="" />
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className={styles.container_cards_img}>
          <img src={images.wam_gestao_logo_alt1} alt="" />
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className={styles.container_cards_img}>
          <img src={images.gav_resorts_logo_alt1} alt="" />
        </div>
      ),
    },
    {
      id: 6,
      content: (
        <div className={styles.container_cards_img}>
          <img src={images.wam_gestao_logo_alt1} alt="" />
        </div>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <h1>
        Quem já confia <br /> na Vize
      </h1>
      <div className={styles.slider}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={_window ? 15 : 30}
          slidesPerView={slidePerView}
          autoplay
        >
          {data.map((card) => (
            <SwiperSlide key={card.id}>{card.content}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BannerTemplate;