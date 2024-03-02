import React from "react";
import * as styles from "../../../styles/crm_dynamics_lp/section04/section04.module.css";
import CardTemplate from "./card_template";
import Form from "./form";
import CarouselTemplate from "./carousel_template/carousel_template";
import images from "../../../images";

const Section04 = () => {

  return (
    <div className={styles.container}>
      <CardTemplate
        img={images.sectio_02_card_img_01}
        title={"Transforme o seu pós venda em um diferencial"}
        description={
          "Gerencie de forma eficiente os processos de Recebíveis, Cobrança, Retenção, Manutenção Técnica e Atendimento."
        }
        imgPosition={"left"}
        link={"/"}
      />
      <div className={styles.section_01}>
        <h1>Oque quem já usa nossa tecnologia tem a dizer</h1>
        <section id={"section_comments"}>
          <CarouselTemplate />
        </section>
      </div>
      <section id="section_form">

      </section>
        <Form />
    </div>
  );
};

export default Section04;
