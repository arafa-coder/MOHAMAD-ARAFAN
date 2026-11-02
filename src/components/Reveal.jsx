import { motion, useReducedMotion } from "framer-motion";

/**
 * Small wrapper that fades and slides its children in once, when scrolled into view.
 * Skips the animation for visitors who prefer reduced motion.
 */
export default function Reveal({ children, className = "", delay = 0, y = 18 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
