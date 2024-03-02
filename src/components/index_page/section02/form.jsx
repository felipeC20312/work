import React from "react";
import * as styles from "../../../styles/index_page/section02/form.module.css";
import images from "../../../images";
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';
import { MdOutlineMail, MdLocalPhone, MdPerson, MdBusiness } from "react-icons/md";
import { toast } from "sonner";

const mask = createDefaultMaskGenerator('+99 (99) 99999-9999');

const Form = () => {

  const [value, setValue] = React.useState('');
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e5feb147-4e5f-4a56-9630-0f10565a1e0d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success('Email enviado com sucesso!')
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <img src={images.sectio_02_form_img_01} alt="" />
      <div className={styles.formText}>
        <h1>Fale conosco</h1>
        <div className={styles.inputs}>
          Nome
          <div className={styles.inputContent}>
            <MdPerson color="#667085" size={"24px"} />
            <input type="text" name="name" placeholder="Seu nome" required />
          </div>
        </div>
        <div className={styles.inputs}>
          Empresa
          <div className={styles.inputContent}>
            <MdBusiness color="#667085" size={"24px"} />
            <input
              type="text"
              name="company"
              placeholder="Minha Empresa LTDA"
              required
            />
          </div>
        </div>
        <div className={styles.inputs}>
          Email
          <div className={styles.inputContent}>
            <MdOutlineMail color="#667085" size={"24px"} />
            <input
              type="text"
              name="email"
              placeholder="exemple@gmail.com"
              required
            />
          </div>
        </div>
        <div className={styles.inputs}>
          Phone
          <div className={styles.inputContent}>
            <MdLocalPhone color="#667085" size={"24px"} />
            <MaskedInput
              maskGenerator={mask}
              value={value}
              onChange={setValue}
              placeholder="+55 (62) 0000-0000"
            />
          </div>
        </div>
        <textarea
          name="mensage"
          placeholder="Um pouco sobre a dúvida sobre o produto oferecido na página."
        ></textarea>
        <button type="submit">Enviar mensagem</button>
      </div>
    </form>
  );
};

export default Form;
