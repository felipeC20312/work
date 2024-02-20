import React from "react";
import * as styles from "../../styles/section02/form.module.css";
import images from "../../images";
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { toast } from "sonner";

const Form = () => {
  
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
            <MdOutlineMail color="#667085" size={"24px"} />
            <input type="text" name="name" placeholder="Seu nome" required />
          </div>
        </div>
        <div className={styles.inputs}>
          Empresa
          <div className={styles.inputContent}>
            <MdOutlineMail color="#667085" size={"24px"} />
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
            <BsQuestionCircle color="#667085" size={"24px"} />
          </div>
        </div>
        <div className={styles.inputs}>
          Phone
          <div className={styles.inputContent}>
            <select onChange={''}>
              <option value="BR">BR</option>
              <option value="PT">PT</option>
              <option value="AM">AM</option>
            </select>
            <input
              type="text"
              name="name"
              placeholder="+55 (62) 000-0000"
              required
            />
            <BsQuestionCircle color="#667085" size={"24px"} />
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
