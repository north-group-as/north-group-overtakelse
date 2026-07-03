import { Calendar, GraduationCap, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import NumberTicker from "@/components/ui/NumberTicker";
import { heroStats } from "@/lib/stats";

const ICONS = { Calendar, GraduationCap, Users };

export default function TrustBar() {
  return (
    <section
      aria-label="Nøkkeltall"
      className="bg-navy-dark py-6 lg:py-8"
    >
      <Container>
        <ul className="flex flex-col divide-y divide-white/10 sm:flex-row sm:divide-x sm:divide-y-0">
          {heroStats.map((stat) => {
            const Icon = ICONS[stat.icon];
            return (
              <li
                key={stat.label}
                className="flex items-center gap-4 py-4 sm:flex-1 sm:justify-center sm:px-8 sm:py-0"
              >
                <Icon className="h-5 w-5 shrink-0 text-green" aria-hidden />
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-extrabold text-white leading-none sm:text-3xl">
                    <NumberTicker value={stat.value} useGrouping={stat.icon !== "Calendar"} />
                    {stat.suffix ? (
                      <span className="text-green">{stat.suffix}</span>
                    ) : null}
                  </span>
                  <span className="text-sm font-medium text-white/55">
                    {stat.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
