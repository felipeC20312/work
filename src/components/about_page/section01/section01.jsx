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
            <img src={images.vize_conecta_logo} alt="" />
          </div>
          Vize Solutions
        </div>
        <h1>
          Se existe algo que nos motiva, <br /> é entregar a melhor solução para
          você!
        </h1>
        <p>
          Nossos consultores oferecem mais de 8 anos de experiência, combinando
          tecnologia e <br /> conhecimento do setor, para ajudar sua empresa a
          alcançar melhores resultados através de <br /> soluções corporativas
          que suporte o crescimento do seu negócio.
        </p>
      </div>

      <CardTemplatel01
        img={images.sectio_02_card_img_01}
        imgPosition={"left"}
        link={"none"}
      >
        <div>
          <h1>Missão</h1>
          <br />
          <p>
            Propor soluções para médias e grandes empresas do mercado
            imobiliário, através da consultoria de processos e tecnologia que
            suportem o objetivo do seu negócio.
          </p>
        </div>

        <div>
          <h1>Visão</h1>
          <br />
          <p>
            Colaborar com as empresas para crescer de forma estruturada através
            da tecnologia estratégica.
          </p>
        </div>

        <div>
          <h1>Valores</h1>
          <br />
          <p>
            Foco no Cliente, Desburocratização de processos, Qualidade,
            Transparência, Capacitação de Pessoas.
          </p>
        </div>
      </CardTemplatel01>

      <div className={styles.card}>
        <h1>
          Confira nossas <br /> conquistas
        </h1>
        <div className={styles.cardTextBox}>
          <h1>+ 2,8 MI</h1>
          <p>Em conversões</p>
        </div>
        <div className={styles.cardTextBox}>
          <h1>+ 170</h1>
          <p>Parceiros</p>
        </div>
        <div className={styles.cardTextBox}>
          <h1>+ 1500</h1>
          <p>Clientes satisfeitos</p>
        </div>
      </div>
    </div>
  );
};

export default Section01;
