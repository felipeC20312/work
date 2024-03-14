import React, { useEffect, useState } from "react";
import * as styles from "../../../styles/crm_dynamics_lp/section03/section03.module.css";
import CardTemplate01 from "./card_template_01";
import CardTemplate02 from "./card_template_02";
import images from "../../../images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Section03 = () => {
  const [style, setStyle] = useState(false);

  useEffect(() => {
    function handleChangeDisplayStyle() {
      if (window.innerWidth <= 800) {
        setStyle(true);
      } else {
        setStyle(false);
      }
    }

    handleChangeDisplayStyle();

    window.addEventListener("resize", handleChangeDisplayStyle);
    return () => {
      window.removeEventListener("resize", handleChangeDisplayStyle);
    };
  }, []);

  const data01 = [
    {
      id: 1,
      content: (
        <CardTemplate01 img={images.icon_file_check} title={"Cadastros"} description={'Empreendimentos, Unidades-Cota, Clientes e Contratos com extrato financeiro integrado: tudo em um único local, proporcionando maior agilidade e organização'}/>
      ),
    },
    {
      id: 2,
      content: (
        <CardTemplate01 img={images.icon_chat1} title={"Solicitações"} description={'A árvore de assuntos facilita a categorização e busca de informações. O processo é otimizado pela abertura em massa de atendimentos e SLA primeira resposta.'} />
      ),
    },
    {
      id: 3,
      content: (
        <CardTemplate01
          img={images.icon_create_dashboard}
          title={"Dashboards"}
          description={'Acompanhe o atendimento com painéis específicos para assistentes e supervisores, garantindo uma visão clara das atividades.'}
        />
      ),
    },
    {
      id: 4,
      content: (
        <CardTemplate01 img={images.icon_envelope_add} title={"E-mail"} description={'Integre o Outlook e registre toda comunicação. Envie e-mails em massa para suas campanhas e controle as respostas para atender os clientes rápido.'} />
      ),
    },
    {
      id: 5,
      content: <CardTemplate01 img={images.icon_signal} title={"Atividades"} description={'Gerencie tarefas, telefonemas e compromissos de forma organizada, mantendo um histórico completo das interações.'} />,
    },
    {
      id: 6,
      content: (
        <CardTemplate01
          img={images.icon_process}
          title={"Suporte Integração"}
          description={'Monitoramento de erros, painel de monitoramento disponibilizado para usuários, manutenção de desempenho.'}
        />
      ),
    },
  ];

  const data02 = [
    {
      id: 1,
      content: <CardTemplate01 img={images.icon_vector} title={"Pesquisas"} description={'Obtenha insights valiosos com avaliações de satisfação do cliente CSAT e pesquisas de boas-vindas.'} />,
    },
    {
      id: 2,
      content: (
        <CardTemplate01 img={images.icon_comment} title={"Comunicação"} description={'Não perca nenhum detalhe com lembretes de aniversariantes e respostas automáticas para atendimentos e e-mails.'}/>
      ),
    },
    {
      id: 3,
      content: (
        <CardTemplate01
          img={images.icon_cloud_connection}
          title={"Integração com seu ERP"}
          description={'Integre com Sienge, eSolution, Mega, UAU e TSE.'}
        />
      ),
    },
    {
      id: 4,
      content: (
        <CardTemplate01
          img={images.icon_chat2}
          title={"Distribuição Automática de Atendimento"}
          description={'Distribua de maneira uniforme entre todos os membros da equipe.'}
        />
      ),
    },
    {
      id: 5,
      content: (
        <CardTemplate01
          img={images.icon_wifi}
          title={'Treinamento + Go Live'}
          description={"Treinamento para supervisores, assistentes e analistas de atendimento, e acompanhamento no primeiro dia de utilização da ferramenta na operação"}
        />
      ),
    },
    {
      id: 6,
      content: <CardTemplate01 img={images.icon_headphone} title={"Suporte"} description={'- Atualização de funcionalidades\n- Dúvidas e inconsistências\n- Gestão de perfis de acesso e aquisição de licença\n- Diagnostico de armazenamento '}/>,
    },
  ];

  const data03 = [
    {
      id: 1,
      content:(
        <CardTemplate02
          img={images.icon_file_check_alt1}
          title={'Cobrança'}
          description={'Automatize a cobrança via WhatsApp, SMS e email. Acompanhe desempenho com dashboards. Encerre cobranças automaticamente em casos de adimplemento ou cancelamento. Controle contatos para gestão.'}
        />
      ),
    },
    {
      id: 2,
      content:(
        <CardTemplate02
          img={images.icon_chat1_alt1}
          title={'Portal do Cliente'}
          description={'Autoatendimento exclusivo via web e mobile: notícias, fluxo financeiro, 2ª via de boleto, extrato IR, antecipação, renegociação, parcelas e atualização de cadastro.'}
        />
      ),
    },
    {
      id: 3,
      content:(
        <CardTemplate02
          img={images.icon_balance}
          title={'Jurídico'}
          description={'Software jurídico simplifica sua rotina: gerencie processos, controle prazos, audiências, documentos e métricas.'}
        />
      ),
    },
    {
      id: 4,
      content:(
        <CardTemplate02
          img={images.icon_vector_alt}
          title={'Reservas'}
          description={'Acompanhe as reservas com informações estratégicas dos hóspedes,fornecendo ao assistente dados essenciais.'}
        />
      ),
    },
    {
      id: 5,
      content:(
        <CardTemplate02
          img={images.icon_padlock}
          title={'Assinatura eletrônica'}
          description={'Crie documentos facilmente, envie-os e acompanhe todo o processo de assinatura de forma eficiente e segura.'}
        />
      ),
    },
    {
      id: 6,
      content:(
        <CardTemplate02
          img={images.icon_browser}
          title={'Omnichannel'}
          description={'Omnichannel simplifica a comunicação: integre WhatsApp, telefonia, chat, SMS e e-mail ao seu CRM para experiência unificada.'}
        />
      ),
    },
    {
      id: 7,
      content:(
        <CardTemplate02
          img={images.icon_box}
          title={'Armazenamento'}
          description={'Visamos a redução de custo com armazenamento em nuvem.'}
        />
      ),
    },
    {
      id: 8,
      content:(
        <CardTemplate02
          img={images.icon_brush}
          title={'Customização'}
          description={'Se deseja personalizar seu CRM, a Vize oferece uma equipe especializadade consultoria para adaptar o sistema conforme as necessidades e identidade da sua empresa.'}
        />
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.section_01}>
        <h1>Todas as soluções na mesma ferramenta</h1>

        {style ? (
          <div className={styles.section_01_coloums}>
            <div className={styles.section_01_coloum}>
              {data01.map((cards) => (
                <div key={cards.id}>{cards.content}</div>
              ))}
              {data02.map((cards) => (
                <div key={cards.id}>{cards.content}</div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.section_01_coloums}>
            <div className={styles.section_01_coloum}>
              {data01.map((cards) => (
                <div key={cards.id}>{cards.content}</div>
              ))}
            </div>

            <div className={styles.section_01_coloum}>
              {data02.map((cards) => (
                <div key={cards.id}>{cards.content}</div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={styles.section_02}>
        <h1>Personalize sua plataforma com módulos extras</h1>

        {style ? (
          <div style={{width: "80dvw", marginBottom: '40px'}}>
            <div className={styles.scroller}>
              <Swiper
                modules={[Pagination]}
                className={styles.swiper}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true, dot: true }}
              >
                {data03.map((cards) => (
                  <SwiperSlide key={cards.id}>{cards.content}</SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ) : (
          <div className={styles.section_02_grid}>
            {data03.map((cards) => (
                <div key={cards.id}>{cards.content}</div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section03;
