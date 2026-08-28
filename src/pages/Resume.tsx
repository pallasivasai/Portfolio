import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { educationData } from "@/data/education";
import { skillCategories, expertise } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-6 break-inside-avoid">
    <h2 className="text-sm font-bold uppercase tracking-widest text-primary border-b border-border pb-1 mb-3">
      {title}
    </h2>
    {children}
  </section>
);

const Resume = () => {
  const handleDownload = () => window.print();

  return (
    <div className="min-h-screen bg-muted/40 py-8 print:bg-white print:py-0">
      <div className="max-w-3xl mx-auto px-4 mb-4 flex items-center justify-between print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
        >
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          <Download className="w-4 h-4" /> Download Resume (PDF)
        </button>
      </div>

      <article
        id="resume-sheet"
        className="max-w-3xl mx-auto bg-background text-foreground shadow-lg print:shadow-none p-8 md:p-10 print:p-0 text-[13px] leading-relaxed"
      >
        <header className="mb-6 border-b border-border pb-4">
          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-primary font-medium mt-1">{profile.title}</p>
          <p className="mt-2 text-muted-foreground">
            {profile.email} · {profile.phone} · {profile.location}
          </p>
          <p className="text-muted-foreground break-all">
            {profile.links.map((l, i) => (
              <span key={l.url}>
                {i > 0 && " · "}
                {l.label}: {l.url}
              </span>
            ))}
          </p>
        </header>

        <Section title="Profile">
          <p className="text-muted-foreground">{profile.summary}</p>
        </Section>

        <Section title="Professional Experience">
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.role + exp.company} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-semibold">{exp.role}</h3>
                  <span className="text-muted-foreground text-xs">{exp.period}</span>
                </div>
                <p className="text-primary text-xs font-medium">
                  {exp.company}
                  {exp.location ? ` · ${exp.location}` : ""}
                </p>
                {exp.description && (
                  <p className="text-muted-foreground mt-1">{exp.description}</p>
                )}
                {exp.responsibilities?.length > 0 && (
                  <ul className="list-disc pl-5 mt-1 space-y-0.5 text-muted-foreground">
                    {exp.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <div className="space-y-2">
            {educationData.map((edu) => (
              <div key={edu.degree} className="flex flex-wrap justify-between gap-x-3">
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground text-xs">{edu.institution}</p>
                </div>
                <span className="text-muted-foreground text-xs">
                  {edu.cgpa} · {edu.status}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Technical Skills">
          <div className="space-y-1">
            {skillCategories.map((cat) => (
              <p key={cat.title}>
                <span className="font-semibold">{cat.title}: </span>
                <span className="text-muted-foreground">
                  {cat.skills.map((s) => s.name).join(", ")}
                </span>
              </p>
            ))}
            <p>
              <span className="font-semibold">Core Strengths: </span>
              <span className="text-muted-foreground">
                {expertise.map((e) => e.title).join(", ")}
              </span>
            </p>
          </div>
        </Section>

        <Section title="Research">
          {profile.research.map((r) => (
            <div key={r.title} className="mb-2">
              <h3 className="font-semibold">{r.title}</h3>
              <p className="text-muted-foreground text-xs">
                {r.note} — {r.url}
              </p>
            </div>
          ))}
        </Section>

        <Section title="Projects">
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.title} className="break-inside-avoid">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-muted-foreground">{p.description}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  <span className="font-medium">Tech:</span> {p.technologies.join(", ")}
                  {p.github ? ` · ${p.github}` : ""}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Certifications">
          <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground">
            {certifications.map((c) => (
              <li key={c.name + c.issuer}>
                <span className="text-foreground font-medium">{c.name}</span> — {c.issuer}
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </div>
  );
};

export default Resume;
