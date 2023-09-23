"use client";
import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

type ScaleProps = {
  children: ReactElement;
  amount: number;
};
const Scale: FC<ScaleProps> = ({ children, amount }) => {
  return <motion.div whileHover={{ scale: amount }}>{children}</motion.div>;
};

export default Scale;
