type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow ${invert ? "!text-white/70" : ""}`}>{eyebrow}</p>
      <h2
        className={`section-title mt-3 text-3xl font-extrabold md:text-[2.55rem] ${
          invert ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-sm leading-7 md:text-[0.98rem] ${
          invert ? "text-slate-200" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
