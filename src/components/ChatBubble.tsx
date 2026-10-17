interface Props {
  from: "client" | "assistant";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function ChatBubble({ from, children, className = "", style }: Props) {
  return (
    <div className={`bubble bubble--${from} ${className}`.trim()} style={style}>
      <span className="bubble__who">{from === "client" ? "Cliente" : "Novyra AI"}</span>
      <p>{children}</p>
    </div>
  );
}

export function TypingBubble({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`bubble bubble--assistant bubble--typing ${className}`.trim()} style={style} aria-label="Novyra AI digitando">
      <span className="bubble__who">Novyra AI</span>
      <p className="typing" aria-hidden="true">
        <i />
        <i />
        <i />
      </p>
    </div>
  );
}
