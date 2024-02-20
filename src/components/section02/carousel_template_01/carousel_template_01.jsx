import React, { useEffect, useState } from "react";
import * as styles from "../../../styles/section02/carousel_template01/carousel_template01.module.css";
import CarouselTemplateCard01 from "./carousel_template01_card";
import images from "../../../images";

import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CarouselTemplate01 = () => {

  const [slidePerView, setSlidePerView] = useState(2.5)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1820 && window.innerWidth > 1454) {
        setSlidePerView(2);
      } else if (window.innerWidth < 1454) {
        setSlidePerView(1);
      } else {
        setSlidePerView(2.5);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, [])

  const dataCarousel1 = [
    {
      id: "1",
      content: (
        <CarouselTemplateCard01
          img={images.crm_dynamics_365_logo}
          title={"CRM Dynamics 365"}
          description={
            "Nossa equipe adapta o poderoso software de CRM da Microsoft para a realidade da sua empresa. Por meio dele, você terá todas as informações sobre os seus clientes integradas em uma plataforma inteligente que vai otimizar todos os processos da sua empresa."
          }
          link={"/"}
        />
      ),
    },
    {
      id: "2",
      content: (
        <CarouselTemplateCard01
          img={images.crm_dynamics_365_logo}
          title={"CRM Dynamics 365"}
          description={
            "Nossa equipe adapta o poderoso software de CRM da Microsoft para a realidade da sua empresa. Por meio dele, você terá todas as informações sobre os seus clientes integradas em uma plataforma inteligente que vai otimizar todos os processos da sua empresa."
          }
          link={"/"}
        />
      ),
    },
    {
      id: "3",
      content: (
        <CarouselTemplateCard01
          img={images.crm_dynamics_365_logo}
          title={"CRM Dynamics 365"}
          description={
            "Nossa equipe adapta o poderoso software de CRM da Microsoft para a realidade da sua empresa. Por meio dele, você terá todas as informações sobre os seus clientes integradas em uma plataforma inteligente que vai otimizar todos os processos da sua empresa."
          }
          link={"/"}
        />
      ),
    },
    {
      id: "4",
      content: (
        <CarouselTemplateCard01
          img={images.crm_dynamics_365_logo}
          title={"CRM Dynamics 365"}
          description={
            "Nossa equipe adapta o poderoso software de CRM da Microsoft para a realidade da sua empresa. Por meio dele, você terá todas as informações sobre os seus clientes integradas em uma plataforma inteligente que vai otimizar todos os processos da sua empresa."
          }
          link={"/"}
        />
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <h1 style={{width: '90dvw'}}>
        Todo problema tem uma solução. <br /> Inclusive o seu
      </h1>
      <div className={styles.scroller}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={slidePerView}
          autoplay
        >
          {dataCarousel1.map((card) => (
            <SwiperSlide key={card.id}>{card.content}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselTemplate01;
