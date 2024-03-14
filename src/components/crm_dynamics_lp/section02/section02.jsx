import React from "react";
import * as styles from "../../../styles/crm_dynamics_lp/section02/section02.module.css";
import images from "../../../images";
import BannerTemplate from "./banner_template";
import CardTemplate from "./card_template";
import { useLocation } from "@reach/router";

const Section02 = () => {

  const location = useLocation();

  return (
    <div className={styles.container}>
      <section id="section_our_clients">
        <BannerTemplate />
      </section>
      <div className={styles.section_01_cards}>
        <CardTemplate
          img={images.section_02_card_img_01}
          title={"Transforme o seu pós venda em um diferencial"}
          description={
            "Gerencie de forma eficiente os processos de Recebíveis, Cobrança, Retenção, Manutenção Técnica e Atendimento."
          }
          imgPosition={"left"}
          link={location.pathname.toString() + '#section_form'}
        />
        <CardTemplate
          img={images.section_02_card_img_02}
          title={"Suas vendas com muito mais alcance"}
          description={
            "Temos o cuidado de escolher a melhor tecnologia e a arquitetura ideal para a implantação do seu projeto."
          }
          imgPosition={"rigth"}
          link={location.pathname.toString() + '#section_form'}
        />
      </div>
    </div>
  );
};

export default Section02;
