import React from "react";
import * as styles from "../../../styles/about_page/section01/section01.module.css";
import images from "../../../images";
import CardTemplatel01 from "./card_template_01";

const Section01 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <div className={styles.textSectionCard}>
          <div className={styles.imageContainer}>
            <img src={images.vize_logo_alt1} alt="" />
          </div>
          Vize Solutions
        </div>
        <h1>
          Entregar a melhor solução para o seu negócio é o que nos motiva! 
        </h1>
        <p>
          Fundada em 2021 em Goiânia - GO, a Vize é o resultado da colaboração entre Wilmar Neto, Miller Maciel e Vitor Quezada, empreendedores com experiência no Mercado Imobiliário. Iniciaram na área de Incorporação e posteriormente expandiram para o mercado de Multipropriedade, destacando-se especialmente em Tecnologia para a Gestão de Relacionamento com o Cliente.
        </p>

        <p>
          Nossa equipe conta com quase uma década de experiência combinando tecnologia e conhecimento do setor para oferecer soluções corporativas que promovem o sucesso do seu negócio.
        </p>
      </div>

      <CardTemplatel01
        img={images.sectio_02_card_img_01}
        imgPosition={"left"}
        link={"none"}
      >
        <h1>Proposito</h1>
          <p>
            Melhorar a eficiência operacional das empresas e aprimorar a experiência de clientes internos e externos, por meio da tecnologia e consultoria de processos.
          </p>

        <h1>Visão</h1>
          <p>
            Ajudar centenas de empresas brasileiras a alcançar excelência no atendimento aos seus clientes internos e externos.
          </p>

        <h1>Valores</h1>
          <p>
            Foco no cliente, qualidade, transparência, capacitação de pessoas e desburocratização de processos
          </p>

      </CardTemplatel01>

      <div className={styles.card}>
        <h1>
          Confira nossas <br /> conquistas
        </h1>
        <div className={styles.cardContent}>
          <div className={styles.cardTextBox}>
            <h1>+ 12,5mil</h1>
            <p>Horas de Projeto</p>
          </div>
          <div className={styles.cardTextBox}>
            <h1>+ 400</h1>
            <p>Projetos Entregues</p>
          </div>
          <div className={styles.cardTextBox}>
            <h1>+ 250mil</h1>
            <p>Proprietários Gerenciados</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section01;
