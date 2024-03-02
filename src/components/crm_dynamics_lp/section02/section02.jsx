import React from "react";
import * as styles from "../../../styles/crm_dynamics_lp/section02/section02.module.css";
import images from "../../../images";
import BannerTemplate from "./banner_template";
import CardTemplate from "./card_template";

const Section02 = () => {
  return (
    <div className={styles.container}>
      <BannerTemplate />
      <div className={styles.section_01_cards}>
        <CardTemplate
          img={images.sectio_02_card_img_01}
          title={"Transforme o seu pós venda em um diferencial"}
          description={
            "Gerencie de forma eficiente os processos de Recebíveis, Cobrança, Retenção, Manutenção Técnica e Atendimento."
          }
          imgPosition={"left"}
          link={"/"}
        />
        <CardTemplate
          img={images.sectio_02_card_img_02}
          title={"Suas vendas com muito mais alcance"}
          description={
            "Temos o cuidado de escolher a melhor tecnologia e a arquitetura ideal para a implantação do seu projeto."
          }
          imgPosition={"rigth"}
          link={"/"}
        />
      </div>
    </div>
  );
};

export default Section02;
