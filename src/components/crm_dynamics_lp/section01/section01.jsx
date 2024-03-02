import React from 'react';
import * as styles from '../../../styles/crm_dynamics_lp/section01/section01.module.css'
import images from '../../../images/index'
import { Link } from 'gatsby'
import { MdArrowForward } from "react-icons/md";

const Section01 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <h1>CRM para Multipropriedade imobiliária<span>.</span></h1>
        <p>Solução totalmente Personalizada para Gestão do Relacionamento com o Cliente, projetada para atender às particularidades do setor.</p>
        <Link className={styles.content_container_link}>Contrate agora 6 horas de consultoria grátis <MdArrowForward /></Link>
        <div className={styles.content_container_card}>
          <div className={styles.content_container_card_img_container}>
            <img src={images.crm_dynamics_365_logo} alt="" />
          </div>
          <div>
            <h1>CRM Dynamics 365</h1>
            <p>A ferramenta lida com eficácia e eficiência com a complexidade do segmento e oferece soluções adaptáveis.</p>
          </div>
        </div>
        <img src={images.crm_dynamics_lp_img2} alt="" />
      </div>
      <div className={styles.img_container}>
        <img src={images.crm_dynamics_lp_img1} alt="" />
      </div>
    </div>
  )
}

export default Section01;