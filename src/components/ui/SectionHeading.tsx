import { cn } from "../../utils/cn";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "reveal max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-gold",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
        {align === "center" && <span className="h-px w-8 bg-gold" />}
      </div>
      <h2
        className={cn(
          "mt-5 font-serif text-4xl font-medium leading-[1.1] text-balance md:text-5xl lg:text-[3.5rem]",
          light ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-[15px] leading-relaxed md:text-base",
            light ? "text-cream/60" : "text-mist"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
