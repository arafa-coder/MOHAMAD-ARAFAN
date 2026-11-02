import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/profile.js";

const INITIAL_VALUES = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
  const text = value.trim();
  switch (name) {
    case "name":
      return text.length < 2 ? "Enter your name (at least 2 characters)." : "";
    case "email":
      return EMAIL_PATTERN.test(text) ? "" : "Enter a valid email address, like name@example.com.";
    case "subject":
      return text.length < 3 ? "Add a short subject (at least 3 characters)." : "";
    case "message":
      return text.length < 10 ? "Write a message of at least 10 characters." : "";
    default:
      return "";
  }
}

function validateAll(values) {
  const errors = {};
  Object.keys(INITIAL_VALUES).forEach((key) => {
    const error = validateField(key, values[key]);
    if (error) errors[key] = error;
  });
  return errors;
}

function Field({ name, label, type = "text", value, error, onChange, onBlur, autoComplete, multiline }) {
  const id = `contact-${name}`;
  const shared = {
    id,
    name,
    value,
    onChange,
    onBlur,
    autoComplete,
    required: true,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : undefined,
  };

  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {multiline ? <textarea rows={5} {...shared} /> : <input type={type} {...shared} />}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setSent(false);
    // Clear an error as soon as the field becomes valid
    if (errors[name] && !validateField(name, value)) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validateAll(values);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    /*
     * There is no backend yet, so the message opens in the visitor's email app.
     * To send from the site itself, replace this with a fetch() to your own Express
     * endpoint or a form service (see README.md, "Contact form").
     */
    const subject = encodeURIComponent(values.subject.trim());
    const body = encodeURIComponent(
      `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setValues(INITIAL_VALUES);
    setErrors({});
  };

  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-title">
      <div className="container contact">
        <div className="contact__intro">
          <SectionHeading
            id="contact-title"
            title="Let's Work Together"
            subtitle="Have a project idea or opportunity? Feel free to get in touch. I'm always interested in learning, building, and working on exciting web development projects."
          />
          <Reveal>
            <ul className="contact-links">
              <li>
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub aria-hidden="true" />
                  <span>
                    GitHub
                    <small>{profile.social.github.replace("https://", "")}</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn aria-hidden="true" />
                  <span>
                    LinkedIn
                    <small>{profile.social.linkedin.replace("https://www.", "")}</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`}>
                  <FaEnvelope aria-hidden="true" />
                  <span>
                    Email
                    <small>{profile.email}</small>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="contact__form-wrap" delay={0.08}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__row">
              <Field
                name="name"
                label="Name"
                value={values.name}
                error={errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="name"
              />
              <Field
                name="email"
                label="Email"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
              />
            </div>
            <Field
              name="subject"
              label="Subject"
              value={values.subject}
              error={errors.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              name="message"
              label="Message"
              multiline
              value={values.message}
              error={errors.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <button type="submit" className="btn btn--primary">
              Send Message
            </button>

            <p className="form-status" role="status" aria-live="polite">
              {sent &&
                `Thanks for reaching out. Your email app should open with the message ready to send. If nothing opens, write to me directly at ${profile.email}.`}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
