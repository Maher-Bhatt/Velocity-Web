import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  className?: string;
  children: ReactNode;
};

export const TiltCard = ({ className, children }: TiltCardProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [canHover, setCanHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!canHover || prefersReducedMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn("tilt-card", className)}
      style={canHover && !prefersReducedMotion ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      onMouseMove={canHover && !prefersReducedMotion ? handleMouseMove : undefined}
      onMouseLeave={canHover && !prefersReducedMotion ? resetTilt : undefined}
      whileHover={canHover && !prefersReducedMotion ? { z: 20 } : undefined}
      transition={canHover && !prefersReducedMotion ? { duration: 0.2, ease: "easeOut" } : undefined}
    >
      {children}
    </motion.div>
  );
};
