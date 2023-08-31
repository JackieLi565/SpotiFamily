"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { FC, ReactElement, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactElement;
};
const Reveal: FC<RevealProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ delay: 0.15 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
