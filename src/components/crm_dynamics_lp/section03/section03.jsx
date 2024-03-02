import React from "react";
import * as styles from "../../../styles/crm_dynamics_lp/section03/section03.module.css";
import CardTemplate01 from "./card_template_01";
import CardTemplate02 from "./card_template_02";
import images from "../../../images";

const Section03 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section_01}>
        <h1>Todas as soluções na mesma ferramenta</h1>

        <div className={styles.section_01_coloums}>
          <div className={styles.section_01_coloum}>
            <CardTemplate01 img={images.icon_file} title={'Cadastros'}/>
            <CardTemplate01 img={images.icon_chat1} title={'Solicitações'}/>
            <CardTemplate01 img={images.icon_dashboard} title={'Dashboards'}/>
            <CardTemplate01 img={images.icon_envelope} title={'E-mail'}/>
            <CardTemplate01 img={images.icon_signal} title={'Atividades'}/>
            <CardTemplate01 img={images.icon_process} title={'Suporte Integração'}/>
          </div>

          <div className={styles.section_01_coloum}>
            <CardTemplate01 img={images.icon_lupa} title={'Presquisas'}/>
            <CardTemplate01 img={images.icon_comment} title={'Comunicação'}/>
            <CardTemplate01 img={images.icon_cloud_connection} title={'Integração com seu ERP'}/>
            <CardTemplate01 img={images.icon_chat} title={'Distribuição Automática de Atendimento'}/>
            <CardTemplate01 img={images.icon_wifi} title={'Treinamento + GO Live'}/>
            <CardTemplate01 img={images.icon_headphone} title={'Suporte'}/>
          </div>
        </div>
      </div>
      <div className={styles.section_02}>
        <h1>Personalize sua plataforma com módulos extras</h1>

        <div className={styles.section_02_grid}>
          <CardTemplate02/>
          <CardTemplate02/>
          <CardTemplate02/>
          <CardTemplate02/>
          <CardTemplate02/>
          <CardTemplate02/>
          <CardTemplate02/>
          <CardTemplate02/>
        </div>
      </div>
    </div>
  );
};

export default Section03;
