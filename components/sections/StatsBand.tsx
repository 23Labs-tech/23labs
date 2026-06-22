import { stats as defaultStats } from "@/lib/data";

type Stat = {
  value: string;
  label: string;
};

type StatsBandProps = {
  stats?: Stat[];
};

export function StatsBand({ stats = defaultStats }: StatsBandProps) {
  return (
    <section className="section section-tight">
      <div className="container stats-grid" aria-label="23Labs project statistics">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
