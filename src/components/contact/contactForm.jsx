import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./css/contactForm.css";

import Joi from "joi";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [mailText, setMailText] = useState("");
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    fullName: Joi.string()
      .pattern(/^[a-zA-ZÀ-ž ]+$/)
      .min(5)
      .max(30)
      .required()
      .messages({
        "string.empty": `Numele nu poate fi gol!`,
        "string.min": `Numele nu poate avea mai puțin de {#limit} litere!`,
        "string.max": `Numele nu poate avea mai mult de {#limit} litere!`,
        "string.pattern.base": `Numele nu poate conține numere!`,
        "any.required": `Numele este obligatoriu!`,
      }),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "org", "ro"] },
      })
      .required()
      .messages({
        "string.empty": `Emailul nu poate fi gol!`,
        "any.required": `Emailul este obligatoriu!`,
      }),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .messages({
        "string.empty": `Numărul de telefon nu poate fi gol!`,
        "string.length": `Numărul de telefon trebuie să conțină {#limit} cifre!`,
        "string.pattern.base": `Numărul de telefon poate conține doar cifre 0-9!`,
        "any.required": `Numărul de telefon este obligatoriu!`,
      }),
    subject: Joi.string().trim().min(5).max(30).required().messages({
      "string.empty": `Subiectul nu poate fi gol!`,
      "string.min": `Subiectul nu poate avea mai puțin de {#limit} litere!`,
      "string.max": `Subiectul nu poate avea mai mult de {#limit} litere!`,
      "any.required": `Subiectul este obligatoriu!`,
    }),
    mailText: Joi.string().required().messages({
      "string.empty": `Mesajul nu poate fi gol!`,
      "any.required": `Mesajul este obligatoriu!`,
    }),
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formObj = { fullName, email, phoneNumber, subject, mailText };
    const result = validate(formObj);

    if (result !== null) {
      setErrors(result);
    }
    if (result === null) {
      // TRIMITEM MAIL
      sendEmail(evt.target);
      // GOLIM FORM si ERROR
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setSubject("");
      setMailText("");
      setErrors({});
    }
  };

  const validate = (obj) => {
    const { error } = schema.validate(obj, { abortEarly: false });

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const sendEmail = (form) => {
    emailjs
      .sendForm(
        "service_sqhup5h",
        "template_ymr33t2",
        form,
        "Qb4hsJWJcyNGtvgAr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mesajul tău a fost trimis cu succes");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Ne pare rău dar mesajul tău NU a fost trimis din cauza unor probleme tehnice! Vă rugăm contactați-ne prin Email sau Telefon până rezolvăm problema!"
          );
        }
      );
  };

  return (
    <div className="contact-formDiv">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <div className="my-">
            <label htmlFor="fullName" className="form-label">
              Nume complet
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              className="form-control"
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && (
              <div className="alert alert-danger m-0 p-1 text-center">
                {errors.fullName}
              </div>
            )}
            <small>Exemplu: Nume Prenume</small>
          </div>
          {/*  */}
          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Emailul tău
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="alert alert-danger  m-0 p-1 text-center">
                {errors.email}
              </div>
            )}
            <small>Exemplu: mailultau@gmail.com</small>
          </div>
          {/*  */}
          <div className="my-3">
            <label htmlFor="phoneNumber" className="form-label">
              Numărul tău de telefon
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              className="form-control"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && (
              <div className="alert alert-danger  m-0 p-1 text-center">
                {errors.phoneNumber}
              </div>
            )}
            <small>Exemplu: 0777111222</small>
          </div>
          {/*  */}
          <div className="my-3">
            <label htmlFor="subject" className="form-label">
              Subiect
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              className="form-control"
              onChange={(e) => setSubject(e.target.value)}
            />
            {errors.subject && (
              <div className="alert alert-danger  m-0 p-1 text-center">
                {errors.subject}
              </div>
            )}
            <small>Exemplu: Înscriere curs</small>
          </div>
          {/*  */}
          <div className="my-3">
            <label htmlFor="mailText" className="form-label">
              Mesaj text
            </label>
            <textarea
              rows="5"
              id="mailText"
              name="mailText"
              value={mailText}
              className="form-control"
              onChange={(e) => setMailText(e.target.value)}
            ></textarea>
            {errors.mailText && (
              <div className="alert alert-danger  m-0 p-1 text-center">
                {errors.mailText}
              </div>
            )}
          </div>
          <button type="submit" className="contact-formButton">
            Trimite mail
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
