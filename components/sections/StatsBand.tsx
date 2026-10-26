import { stats as defaultStats } from "@/lib/data";

type Stat = {
  value: string;
  label: string;
};

type StatsBandProps = {
  stats?: Stat[];
  noTop?: boolean;
};

/**
 * Renders the finished figure in server HTML. The previous count-up started
 * at 0, so crawlers and no-JS visitors saw "0+".
 * Figures live in lib/data.ts and still need the owner to confirm them.
 */
export function StatsBand({ stats = defaultStats, noTop = false }: StatsBandProps) {
  return (
    <section className={`sec sec-dark stats-section${noTop ? " no-top" : ""}`}>
      <div className="wrap stats-band" aria-label="23Labs project statistics">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <div className="n">
              {stat.value.replace(/\+$/, "")}
              {stat.value.endsWith("+") ? <span className="plus">+</span> : null}
            </div>
            <div className="l">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
