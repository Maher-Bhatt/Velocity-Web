import { useEffect, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export const TiltCard = ({ className, style, children }: TiltCardProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setCanHover(mediaQuery.matches);
    const updateReducedMotion = () => setPrefersReducedMotion(reducedMotionQuery.matches);

    update();
    updateReducedMotion();
    mediaQuery.addEventListener("change", update);
    reducedMotionQuery.addEventListener("change", updateReducedMotion);

    return () => {
      mediaQuery.removeEventListener("change", update);
      reducedMotionQuery.removeEventListener("change", updateReducedMotion);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!canHover || prefersReducedMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
    const rotateX = (((event.clientY - rect.top) / rect.height - 0.5) * -14);
    event.currentTarget.style.setProperty("--tilt-rotate-x", `${rotateX}deg`);
    event.currentTarget.style.setProperty("--tilt-rotate-y", `${rotateY}deg`);
  };

  const resetTilt = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--tilt-rotate-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-rotate-y", "0deg");
  };

  return (
    <div
      className={cn("tilt-card", className)}
      style={canHover && !prefersReducedMotion ? { ...style, transformPerspective: 1000 } : style}
      onMouseMove={canHover && !prefersReducedMotion ? handleMouseMove : undefined}
      onMouseLeave={canHover && !prefersReducedMotion ? resetTilt : undefined}
    >
      {children}
    </div>
  );
};
