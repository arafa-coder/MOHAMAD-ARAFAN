import { motion, useReducedMotion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import SocialLinks from "./SocialLinks.jsx";
import { profile } from "../data/profile.js";
import { education } from "../data/education.js";

const EASE = [0.22, 1, 0.36, 1];

const STACK = ["MongoDB", "Express.js", "React.js", "Node.js"];

// Purely decorative background pieces
const SYMBOLS = [
  { char: "</>", style: { top: "16%", left: "5%", "--r": "-8deg", "--d": "0s" } },
  { char: "{ }", style: { top: "62%", left: "3%", "--r": "6deg", "--d": "1.2s" } },
  { char: "=>", style: { top: "10%", right: "42%", "--r": "5deg", "--d": "2s" } },
  { char: "[ ]", style: { bottom: "10%", left: "44%", "--r": "-5deg", "--d": "0.6s" } },
  { char: "( )", style: { top: "8%", right: "6%", "--r": "8deg", "--d": "1.6s" } },
  { char: "&&", style: { bottom: "14%", right: "4%", "--r": "-6deg", "--d": "2.6s" } },
];
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  delay: `${(i % 7) * 0.8}s`,
  size: 2 + (i % 3),
}));

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const textItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
const codeContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
};
const codeLine = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } },
};

// Tiny helpers for syntax colouring in the code window
const Kw = ({ children }) => <span className="tok-kw">{children}</span>;
const Prop = ({ children }) => <span className="tok-prop">{children}</span>;
const Str = ({ children }) => <span className="tok-str">{children}</span>;
const Punc = ({ children }) => <span className="tok-punc">{children}</span>;

const codeLines = [
  <>
    <Kw>const</Kw> developer <Punc>= {"{"}</Punc>
  </>,
  <>
    {"  "}
    <Prop>name</Prop>
    <Punc>:</Punc> <Str>"{profile.name}"</Str>
    <Punc>,</Punc>
  </>,
  <>
    {"  "}
    <Prop>role</Prop>
    <Punc>:</Punc> <Str>"{profile.role}"</Str>
    <Punc>,</Punc>
  </>,
  <>
    {"  "}
    <Prop>stack</Prop>
    <Punc>:</Punc> <Str>"MERN"</Str>
    <Punc>,</Punc>
  </>,
  <>
    {"  "}
    <Prop>degree</Prop>
    <Punc>:</Punc> <Str>"{education.degree}"</Str>
    <Punc>,</Punc>
  </>,
  <>
    {"  "}
    <Prop>openTo</Prop>
    <Punc>: [</Punc>
  </>,
  ...profile.lookingFor.map((item) => (
    <>
      {"    "}
      <Str>"{item}"</Str>
      <Punc>,</Punc>
    </>
  )),
  <>
    {"  "}
    <Punc>],</Punc>
  </>,
  <Punc>{"};"}</Punc>,
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? "show" : "hidden";

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--a" />
        <span className="blob blob--b" />
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay }}
          />
        ))}
        {SYMBOLS.map((s, index) => (
          <span key={s.char} className={`symbol${index > 2 ? " symbol--extra" : ""}`} style={s.style}>
            {s.char}
          </span>
        ))}
      </div>

      <div className="container hero__grid">
        <motion.div className="hero__content" variants={textContainer} initial={initial} animate="show">
          <motion.h1 id="hero-title" className="hero__title" variants={textItem}>
            Hi, I&apos;m {profile.name}
          </motion.h1>
          <motion.p className="hero__role" variants={textItem}>
            {profile.role}
          </motion.p>
          <motion.p className="hero__subrole" variants={textItem}>
            {profile.subRole}
          </motion.p>
          <motion.ul className="stack-pills" variants={textItem} aria-label="MERN stack">
            {STACK.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </motion.ul>
          <motion.p className="hero__text" variants={textItem}>
            {profile.heroDescription}
          </motion.p>
          <motion.div className="hero__actions" variants={textItem}>
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href={profile.cvUrl} className="btn btn--ghost" download>
              <FaDownload aria-hidden="true" /> Download CV
            </a>
          </motion.div>
          <motion.div variants={textItem}>
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
        >
          <div className="code-window" aria-hidden="true">
            <div className="code-window__bar">
              <span />
              <span />
              <span />
              <p>developer.js</p>
            </div>
            <motion.pre className="code-window__body" variants={codeContainer} initial={initial} animate="show">
              {codeLines.map((line, index) => (
                <motion.span key={index} className="code-line" variants={codeLine}>
                  {line}
                </motion.span>
              ))}
            </motion.pre>
          </div>

          <div className="hero__avatar">
            <img
              src={profile.profileImage}
              alt={`Portrait of ${profile.name}`}
              width="180"
              height="180"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
