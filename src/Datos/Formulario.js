import { React, useRef } from "react";
import emailjs from "@emailjs/browser";

function Formulario() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3dkwet9", "template_cycj5ts", form.current, {
        publicKey: "s_uOsOdyg6vzxwYQJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>

      <input type="text" name="user_name" />
      <label>Email</label>

      <input type="email" name="user_email" />
      <label>Mensaje</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
export default Formulario;
