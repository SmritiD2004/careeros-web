"use client";

import { useRef } from "react";
import "./SpotlightCard.module.css";

type SpotlightCardProps = {
  children?: React.ReactNode;
  className?: string;
  spotlightColor?: string;
};

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = divRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty("--mouse-x", `${x}px`);
    element.style.setProperty("--mouse-y", `${y}px`);
    element.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`.trim()}>
      {children}
    </div>
  );
};

export default SpotlightCard;
