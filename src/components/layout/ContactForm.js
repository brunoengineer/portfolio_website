import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import myface2 from "../../img/myface2.jpg";


const FORM_ENDPOINT = "https://public.herotofu.com/v1/98373de0-13f0-11ee-8943-31c644c0bcc7"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
        <div>
          <div className={styles.hero}>
            <div className={styles.mask}>
              <img className={styles.photo} src={myface2} alt="my pretty face"/>
            </div>
            <div className={styles.content}>
              <h1>Thank you! We'll be in touch soon.</h1>
            </div>
          </div>
        </div>
    );
  }

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.mask}>
          <img className={styles.photo} src={myface2} alt="my pretty face"/>
        </div>
        <div className={styles.content}>
          <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">Let's Work Together, Contact Me.</h1>

          <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
        >
            <div>
              <input type="text" placeholder="Your name" name="name" required />
            </div>
            <div>
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div>
              <textarea placeholder="Your message" name="message" required />
            </div>
            <div>
              <button type="submit"> Send a message </button>
            </div>
          </form>
        </div>
      </div>
    </div>


  );
};

export default ContactForm;