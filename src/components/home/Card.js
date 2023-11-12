import React from "react";
import {
  motion,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

export const Card = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  const onMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const cardStyle = {
    maskImage,
    WebkitMaskImage: maskImage,
    padding: "25px", // Add your desired padding value here
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust the overlay color as needed
    pointerEvents: "none",
    position: "absolute",
    inset: 0,
    zIndex: 10,
    transition: "opacity 0.5s",
  };

  const overlayHoverStyle = {
    opacity: 0.5, // Adjust the opacity for the hover effect
  };

  return (
    <div
      onMouseMove={onMouseMove}
      className="overflow-hidden relative duration-700 border rounded-xl group md:gap-8 border-zinc-600"
      style={cardStyle}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br via-zinc-100/10 transition duration-1000"
          style={{ ...overlayStyle, ...overlayHoverStyle }}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={overlayStyle}
        />
      </div>

      {children}
    </div>
  );
};