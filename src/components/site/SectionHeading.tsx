type SectionHeadingProps = {
  label: string;
  title: string;
  accent: string;
  subtext?: string;
};

export const SectionHeading = ({ label, title, accent, subtext }: SectionHeadingProps) => (
  <div className="space-y-3">
    <p className="section-label">{label}</p>
    <h2 className="section-title">
      {title} <span className="accent-gradient-text">{accent}</span>
    </h2>
    {subtext ? <p className="max-w-3xl text-[#b7b7c6]">{subtext}</p> : null}
  </div>
);
