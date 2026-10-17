import { PROBLEM } from "../config/content";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { Reveal } from "./Reveal";

function Situation({ index, text }: { index: number; text: string }) {
  const ref = useScrollProgress<HTMLLIElement>({ start: 0.95, end: 0.6 });
  return (
    <li ref={ref} className="sit">
      <span className="sit__n" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="sit__t">{text}</span>
      <span className="sit__line" aria-hidden="true" />
    </li>
  );
}

export function ProblemSection() {
  return (
    <section id="desafio" className="section problem" aria-labelledby="problem-title">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {PROBLEM.eyebrow}
        </Reveal>
        <Reveal as="h2" id="problem-title" className="display">
          <span>{PROBLEM.title[0]}</span> <span className="dim">{PROBLEM.title[1]}</span>
        </Reveal>

        <ul className="sits">
          {PROBLEM.situations.map((s, i) => (
            <Situation key={i} index={i} text={s} />
          ))}
        </ul>

        <Reveal as="p" className="lead problem__support">
          {PROBLEM.support}
        </Reveal>
      </div>
    </section>
  );
}
