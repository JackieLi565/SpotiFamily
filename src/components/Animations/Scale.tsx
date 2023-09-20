"use client";
import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

type ScaleProps = {
  children: ReactElement;
};
const Scale: FC<ScaleProps> = ({ children }) => {
  return <motion.div whileHover={{ scale: 1.2 }}>{children}</motion.div>;
};

export default Scale;
