import * as styles from "../../../styles/index_page/section02/section02.module.css";
import React from "react";
import CardTemplatel01 from "./card_template_01";
import CardTemplatel02 from "./card_template_02";
import CarouselTemplate01 from "./carousel_template_01/carousel_template_01";
import CarouselTemplate02 from "./carousel_template_02/carousel_template_02";
import { MdArrowForward, MdOutlineCheckCircle } from "react-icons/md";
import { useLocation } from "@reach/router";
import images from "../../../images/index";
import Form from "./form";
import BannerTemplate02 from "./banner_template_02";

const Section02 = () => {

  const location = useLocation();

  return (
    <div className={styles.container}>
      
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

      <div className={styles.textSection}>
        <div className={styles.textSectionCard}>
          <div className={styles.textSectionImageContainer}>
            <img src={images.crm_dynamics_365_logo} alt="" />
          </div>
          CRM Dynamics
        </div>
        <h1>
          Da Venda ao Pós-Venda,<br /> Oferecemos Soluções de Ponta a Ponta! 
        </h1>
        <p>
          Proporcionamos uma visão 360º da jornada do cliente com sua empresa, <br />sem deixar escapar nenhum detalhe
        </p>
      </div>

      <div className={styles.content}>
        <CardTemplatel01
          img={images.sectio_02_card_img_01}
          title={"Transforme o seu pós venda em um diferencial !"}
          description={
            "Gerencie de maneira eficiente os processos de recebíveis, cobrança, retenção, jurídico, manutenção técnica, vistoria e atendimento. Potencialize a satisfação do cliente e alcance o sucesso do seu negócio."
          }
          imgPosition={"left"}
          link={location.pathname.toString() + '#section_form'}
        />
        <CardTemplatel01
          img={images.sectio_02_card_img_02}
          title={"Amplie o alcance das suas vendas"}
          description={
            "Ative seu potencial de vendas com nosso sistema integrado, que centraliza leads de todas as origens. Experimente um aumento significativo na taxa de conversão de vendas enquanto proporcionamos uma jornada do cliente de ponta a ponta, sem perder nenhum detalhe do processo."
          }
          imgPosition={"rigth"}
          link={location.pathname.toString() + '#section_form'}
        />
        <CardTemplatel01
          img={images.sectio_02_card_img_03}
          title={"Vantagens exclusivas para você impulsionar o seu negócio"}
          description={
            "Temos o cuidado de escolher a melhor tecnologia e a arquitetura ideal para a implantação do seu projeto."
          }
          imgPosition={"left"}
          link={location.pathname.toString() + '#section_form'}
        >
          <div className={styles.cardTemplateText}>
            <p>
              <MdOutlineCheckCircle
                color="#30b565"
                size={"20px"}
                style={{ marginRight: "15px", flexShrink: '0'}}
              />
              Aumento da Eficiência Operacional
            </p>
            <p>
              <MdOutlineCheckCircle
                color="#30b565"
                size={"20px"}
                style={{ marginRight: "15px", flexShrink: '0' }}
              />
              Gestão transparente de indicadores de operação
            </p>
            <p>
              <MdOutlineCheckCircle
                color="#30b565"
                size={"20px"}
                style={{ marginRight: "15px", flexShrink: '0' }}
              />
              Régua de comunicação personalizada com o cliente
            </p>
            <p>
              <MdOutlineCheckCircle
                color="#30b565"
                size={"20px"}
                style={{ marginRight: "15px", flexShrink: '0' }}
              />
              Incremento da fidelização com a marca
            </p>
            <p>
              <MdOutlineCheckCircle
                color="#30b565"
                size={"20px"}
                style={{ marginRight: "15px", flexShrink: '0' }}
              />
              Aprimoramento da experiência do cliente
            </p>
            <p>
              <MdOutlineCheckCircle
                color="#30b565"
                size={"20px"}
                style={{ marginRight: "15px", flexShrink: '0' }}
              />
              Impulso nas vendas
            </p>
          </div>
        </CardTemplatel01>

        <CardTemplatel02
          img={images.sectio_02_card_img_04}
          title={"Expansão do centro ao sul do Brasil"}
          description={
            "A Vize é sediada em Goiânia e também opera em diversas regiões do país, fornecendo soluções especializadas em processos de atendimento ao cliente no mercado de multipropriedade e incorporação imobiliária."
          }
          imgPosition={"rigth"}
          link={location.pathname.toString() + '#section_form'}
        />

        <section id="carousel_template_01">
          <CarouselTemplate01 />
        </section>

        <CardTemplatel01
          img={images.sectio_02_card_img_05}
          img2={images.microsoft_partner_logo}
          title={"Consultoria Vize: soluções sob medida para você."}
          description={
            "Com a Vize, você terá um plano de ação personalizado para alcançar seus objetivos."
          }
          imgPosition={"left"}
          link={location.pathname.toString() + '#section_form'}
        />

        <h1 style={{ textAlign: "center", width: "90dvw" }}>
          O que quem que já usa nossa tecnologia têm a dizer.
        </h1>

        <section id="section_our_clients">
          <BannerTemplate02 />
        </section>

        <section id="section_comments">
          <CarouselTemplate02 />
        </section>

        <div className={styles.banner}>
          <h1>
            Vamos criar uma nova <span>jornada</span>?
          </h1>
          <a href="/#section_form">
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
