import * as styles from "../../../styles/index_page/section02/section02.module.css";
import React from "react";
import CardTemplatel01 from "./card_template_01";
import CardTemplatel02 from "./card_template_02";
import CarouselTemplate01 from "./carousel_template_01/carousel_template_01";
import CarouselTemplate02 from "./carousel_template_02/carousel_template_02";
import { MdArrowForward, MdOutlineCheckCircle } from "react-icons/md";
import images from "../../../images/index";
import Form from "./form";

const Section02 = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.card}>
        <h1>
          Confira nossas <br /> conquistas
        </h1>
        <div className={styles.cardContent}>
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
            <p>Clientes Satisfeitos</p>
          </div>
        </div>
      </div>

      <div className={styles.textSection}>
        <div className={styles.textSectionCard}>
          <div className={styles.textSectionImageContainer}>
            <img src={images.crm_dynamics_365_logo} alt="" />
          </div>
          CRM Dynamics
        </div>
        <h1>
          Maximize Suas Vendas Imobiliarias com <br /> nosso CRM de Ponta a
          Ponta!
        </h1>
        <p>
          Tecnologia que conecta sua empresa ao seu cliente em uma jornada
          excepcional com <br /> resultados impressionantes para o seu negócio.
        </p>
      </div>

      <div className={styles.content}>
        <CardTemplatel01
          img={images.sectio_02_card_img_01}
          title={"Transforme o seu pós venda em um diferencial"}
          description={
            "Gerencie de forma eficiente os processos de Recebíveis, Cobrança, Retenção, Manutenção Técnica e Atendimento."
          }
          imgPosition={"left"}
          link={"/"}
        />
        <CardTemplatel01
          img={images.sectio_02_card_img_02}
          title={"Suas vendas com muito mais alcance"}
          description={
            "Temos o cuidado de escolher a melhor tecnologia e a arquitetura ideal para a implantação do seu projeto."
          }
          imgPosition={"rigth"}
          link={"/"}
        />
        <CardTemplatel01
          img={images.sectio_02_card_img_03}
          title={"Vantagens exclusivas para você"}
          description={
            "Temos o cuidado de escolher a melhor tecnologia e a arquitetura ideal para a implantação do seu projeto."
          }
          imgPosition={"left"}
          link={"/"}
        >
          <div className={styles.cardTemplateText}>
            <p>
              <MdOutlineCheckCircle
                color="#30b565"
                size={"24px"}
                style={{ marginRight: "15px" }}
              />
              Gestão clara de Indicadores de operação
            </p>
            <p>
              <MdOutlineCheckCircle
                color="#30b565"
                size={"24px"}
                style={{ marginRight: "15px" }}
              />
              Régua de comunicação com Cliente
            </p>
            <p>
              <MdOutlineCheckCircle
                color="#30b565"
                size={"24px"}
                style={{ marginRight: "15px" }}
              />
              Aumento de fidelização com a marca
            </p>
            <p>
              <MdOutlineCheckCircle
                color="#30b565"
                size={"24px"}
                style={{ marginRight: "15px" }}
              />
              Maior produtividade da operação
            </p>
            <p>
              <MdOutlineCheckCircle
                color="#30b565"
                size={"24px"}
                style={{ marginRight: "15px" }}
              />
              Traga seus leads de qualquer origem
            </p>
          </div>
        </CardTemplatel01>

        <CardTemplatel02
          img={images.sectio_02_card_img_04}
          title={"Expandindo do centro ao sul do Brasil"}
          description={
            "Soluções personalizadas e integradas com uma consultoria especializada em processo de atendimento ao cliente."
          }
          imgPosition={"rigth"}
          link={"/"}
        />

        <section id="carousel_template_01">
          <CarouselTemplate01 />
        </section>

        <CardTemplatel01
          img={images.sectio_02_card_img_05}
          title={"Consultoria sob medida para você"}
          description={
            "Analisamos cuidadosamente cada caso para oferecer soluções personalizadas que atendam às necessidades específicas de cada cliente."
          }
          imgPosition={"left"}
          link={"/"}
        />

        <h1 style={{ textAlign: "center", width: "90dvw" }}>
          Oque quem já usa nossa tecnologia <br /> tem a dizer
        </h1>

        <section id="section_comments">
          <CarouselTemplate02 />
        </section>

        <div className={styles.banner}>
          <h1>
            Vamos criar uma nova <span>jornada</span>?
          </h1>
          <a href="/">
            Solicitar consultoria <MdArrowForward size="20px" color="#FF601A" />
          </a>
        </div>

        <section id="section_form">
          <Form />
        </section>
      </div>
    </div>
  );
};

export default Section02;
