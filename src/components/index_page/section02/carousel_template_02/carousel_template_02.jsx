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
          img={images.user_02_img}
          title={"Raisa Gonçalves"}
          subtitle={'Head de pós-venda '}
          description={
            '”A parceria com a Vize e seus fundadores se estende há quase 5 anos. Ela se consolida até hoje pela fácil personalização dos produtos atendendo às minhas necessidades, alto empenho em buscar soluções inovadoras e principalmente, pela confiança na entrega. Uma empresa jovem, com pessoas jovens e simultaneamente, mentes brilhantes e antenadas ao que o mercado procura.”'
          }
        />
      ),
    },
    {
      id: "2",
      content: (
        <CarouselTemplateCard02
          img={images.user_01_img}
          title={"Larissa Dantas"}
          subtitle={"Consultura Estratégica CX"}
          description={
            '”A Vize é uma empresa que oferece segurança, suporte e excelentes soluções. Com um time alinhado para o sucesso do cliente, transparência no reporte e evolução dos projetos, é sem sombras de dúvidas, uma empresa que tenho satisfação em indicar!”'
          }
        />
      ),
    },
    {
      id: "3",
      content: (
        <CarouselTemplateCard02
          img={images.user_05_img}
          title={"Leonardo Silveira"}
          subtitle={"Diretor-executivo - Hotel Nacional"}
          description={
            '"A Vize Solutions é mais do que uma fornecedora de soluções tecnológicas, é uma parceira que entende a importância da simplicidade na complexidade dos negócios. Se você busca uma abordagem inteligente, simples e eficaz para a gestão de clientes, a Vize Solutions é a escolha certa"'
          }
        />
      ),
    },
    {
      id: "4",
      content: (
        <CarouselTemplateCard02
          img={images.user_04_img}
          title={"Jones Costa"}
          subtitle={"Coordenador de Relacionamento"}
          description={
            '“O profissionalismo, dedicação, entrega e visão, é algo singular desse time, e que não tínham os vivenciado com outros fornecedores. Desde então, muitas entregas aconteceram. E nossa gestão teve um salto enorme em termos de acompanhamento e visão sistêmica.”'
          }
        />
      ),
    },
    {
      id: "5",
      content: (
        <CarouselTemplateCard02
          img={images.user_03_img}
          title={"Camila Belmonte"}
          subtitle={"Gerente de Relacionamento - GAV Resorts"}
          description={
            '”Somos clientes da Vize há mais de 2 anos. Eles estiveram conosco em um projeto muito desafiador que foi a implantação do CRM para uma operação que atente 50 mil clientes.Engajamento, cumprimento de prazos e atenção as necessidades do cliente foram fundamentais para o sucesso do projeto.”'
          }
        />
      ),
    },
    {
      id: "6",
      content: (
        <CarouselTemplateCard02
          img={images.user_06_img}
          title={"Ana Paula Coronel"}
          subtitle={"Gerente de Relacionamento - Laghetto Golden Multipropriedade"}
          description={
            '”São feras! Entrega, acompanhamento e condução dos projetos muito acima da expectativa"'
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
