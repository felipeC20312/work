import React, { useEffect, useState } from "react";
import CarouselTemplateCard01 from "./carousel_template01_card";
import images from "../../../../images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import * as styles from "../../../../styles/index_page/section02/carousel_template01/carousel_template01.module.css";

import "swiper/css";
import "swiper/css/pagination";

const CarouselTemplate01 = () => {

  const [slidePerView, setSlidePerView] = useState(2.5)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1820 && window.innerWidth > 1454) {
        setSlidePerView(2.05);
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
          link={"/#section_form"}
        />
      ),
    },
    {
      id: "2",
      content: (
        <CarouselTemplateCard01
          img={images.crm_dynamics_365_logo}
          title={"Power Platform"}
          description={
            "Nossa equipe adapta o poderoso software de CRM da Microsoft para a realidade da sua empresa. Por meio dele, você terá todas as informações sobre os seus clientes integradas em uma plataforma inteligente que vai otimizar todos os processos da sua empresa."
          }
          link={"/#section_form"}
        />
      ),
    },
    {
      id: "3",
      content: (
        <CarouselTemplateCard01
          img={images.crm_dynamics_365_logo}
          title={"Portal do Cliente"}
          description={
            "Nossa equipe adapta o poderoso software de CRM da Microsoft para a realidade da sua empresa. Por meio dele, você terá todas as informações sobre os seus clientes integradas em uma plataforma inteligente que vai otimizar todos os processos da sua empresa."
          }
          link={"/#section_form"}
        />
      ),
    },
    {
      id: "4",
      content: (
        <CarouselTemplateCard01
          img={images.crm_dynamics_365_logo}
          title={"Hospedagem"}
          description={
            "Nossa equipe adapta o poderoso software de CRM da Microsoft para a realidade da sua empresa. Por meio dele, você terá todas as informações sobre os seus clientes integradas em uma plataforma inteligente que vai otimizar todos os processos da sua empresa."
          }
          link={"/#section_form"}
        />
      ),
    },
    {
      id: "5",
      content: (
        <CarouselTemplateCard01
          img={images.crm_dynamics_365_logo}
          title={"Integrações ERP"}
          description={
            "Nossa equipe adapta o poderoso software de CRM da Microsoft para a realidade da sua empresa. Por meio dele, você terá todas as informações sobre os seus clientes integradas em uma plataforma inteligente que vai otimizar todos os processos da sua empresa."
          }
          link={"/#section_form"}
        />
      ),
    },
    {
      id: "6",
      content: (
        <CarouselTemplateCard01
          img={images.crm_dynamics_365_logo}
          title={"Outras Inte"}
          description={
            "Nossa equipe adapta o poderoso software de CRM da Microsoft para a realidade da sua empresa. Por meio dele, você terá todas as informações sobre os seus clientes integradas em uma plataforma inteligente que vai otimizar todos os processos da sua empresa."
          }
          link={"/#section_form"}
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
          className={styles.swiper}
          modules={[ Pagination ]}
          slidesPerView={slidePerView}
          spaceBetween={50}
          pagination={true}
          initialSlide={1}
          centeredSlides={true}
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
