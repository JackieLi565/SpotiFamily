"use client";
import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

type AnimateFadeProps = {
  type: "center" | "left" | "right";
  children: ReactElement;
};
const AnimateFade: FC<AnimateFadeProps> = ({ type, children }) => {
  const initalStart = {
    left: { x: -20, opacity: 0 },
    center: { x: 0, opacity: 0 },
    right: { x: 20, opacity: 0 },
  };
  return (
    <motion.div
      initial={initalStart[type]}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.15 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateFade;
