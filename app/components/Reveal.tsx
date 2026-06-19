import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
  style?: CSSProperties;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  style,
}: RevealProps) {
  return (
    <Tag className={className} style={style} data-reveal-delay={delay || undefined}>
      {children}
    </Tag>
  );
}
