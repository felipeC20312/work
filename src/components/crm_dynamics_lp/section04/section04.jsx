import React from "react";
import * as styles from "../../../styles/crm_dynamics_lp/section04/section04.module.css";
import CardTemplate from "./card_template";
import Form from "./form";
import CarouselTemplate from "./carousel_template/carousel_template";
import images from "../../../images";
import { useLocation } from "@reach/router";

const Section04 = () => {

  const location = useLocation();

  return (
    <div className={styles.container}>
      <CardTemplate
        img={images.sectio_02_card_img_05}
        title={"Deixe o sistema com a cara da sua empresa"}
        description={
          "O sistema flexível e robusto e intuitivo, totalmente web e customizável, conforme as necessidades do cliente, com workflow inteligente, dinâmico, seguindo o conceito de BPM e com ferramentas de análises gerenciais."
        }
        imgPosition={"left"}
        link={location.pathname.toString() + '#section_form'}
      />
      <div className={styles.section_01}>
        <h1>Oque quem já usa nossa tecnologia tem a dizer</h1>
        <section id={"section_comments"}>
          <CarouselTemplate />
        </section>
      </div>
      <section id="section_form">
        <Form />
      </section>
    </div>
  );
};

export default Section04;
