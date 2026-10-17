import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface Props {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
  id?: string;
}

/** Revela o conteúdo com fade + deslocamento vertical ao entrar na viewport (transform/opacity apenas). */
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, id }: Props) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal${inView ? " is-in" : ""} ${className}`.trim()}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
