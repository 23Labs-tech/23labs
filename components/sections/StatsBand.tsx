import { stats as defaultStats } from "@/lib/data";

type Stat = {
  value: string;
  label: string;
};

type StatsBandProps = {
  stats?: Stat[];
  noTop?: boolean;
};

export function StatsBand({ stats = defaultStats, noTop = false }: StatsBandProps) {
  return (
    <section className={`sec stats-section${noTop ? " no-top" : ""}`}>
      <div className="wrap stats-band reveal" aria-label="23Labs project statistics">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <div className="n">
              {stat.value.replace("+", "")}
              <span className="plus">+</span>
            </div>
            <div className="l">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
