import React, { useEffect, useState } from "react";
import CarouselTemplateCard01 from "./carousel_template01_card";
import images from "../../../../images";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import * as styles from "../../../../styles/index_page/section02/carousel_template01/carousel_template01.module.css";

import "swiper/css/pagination";
import "swiper/css";

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
            "Acelere processos internos, otimize recursos e controle custos, proporcionando simultaneamente uma experiência aprimorada para seus clientes."
          }
          link={"/#section_form"}
        />
      ),
    },
    {
      id: "2",
      content: (
        <CarouselTemplateCard01
          img={images.vize_conecta_logo}
          title={"Vize Conecta"}
          description={
            "Acesso fácil via web e mobile para notícias, fluxo financeiro, 2ª via de boleto, extrato IR, antecipação, renegociação, prorrogação de parcelas, abertura de atendimentos e atualizações de cadastro"
          }
          link={"/#section_form"}
        />
      ),
    },
    {
      id: "3",
      content: (
        <CarouselTemplateCard01
          img={images.power_platform_logo}
          title={"Power Platform"}
          description={
            "Obtenha insights valiosos através de dados e automatize fluxos de trabalho, eliminando tarefas repetitivas. Capacite sua equipe e impulsione a eficiência operacional."
          }
          link={"/#section_form"}
        />
      ),
    },
    {
      id: "4",
      content: (
        <CarouselTemplateCard01
          img={images.vize_cloud_logo}
          title={"Vize Cloud"}
          description={
            "sua hospedagem de dados 24/7 em parceria com a Microsoft Azure. Confidencialidade, segurança, monitoramento, qualidade, backups regulares e suporte dedicado – tudo isso ao alcance de um clique."
          }
          link={"/#section_form"}
        />
      ),
    },
    {
      id: "5",
      content: (
        <CarouselTemplateCard01
          img={images.integracao_erp_logo}
          title={"Integrações ERP"}
          description={
            "Conecte o Microsoft CRM Dynamics 365 ao seu ERP e centralize informações estratégicas em um único local, simplificando o atendimento ao cliente e proporcionando uma gestão mais ágil e eficaz."
          }
          link={"/#section_form"}
        />
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <h1 style={{width: '90dvw'}}>
      A Vize é a solução que você procura. <br /> Descubra como podemos te ajudar.
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
