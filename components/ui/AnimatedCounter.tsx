"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={className}
    >
      {prefix}
      <CountUp
        end={value}
        duration={duration}
        separator=","
      />
      {suffix}
    </motion.span>
  );
}