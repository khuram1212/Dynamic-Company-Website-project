import React from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
}

const Marquee = ({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = "30s",
  ...props
}: MarqueeProps) => {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
      style={{ "--duration": duration } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] ${
              vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row"
            } ${
              pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
            } ${reverse ? "[animation-direction:reverse]" : ""}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

export default Marquee;