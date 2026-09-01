import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { educationData } from "@/data/education";
import { skillCategories, expertise } from "@/data/skills";
import { cybersecurityCerts, technicalCerts, googleCredentials } from "@/data/certifications";
import { projects } from "@/data/projects";

/**
 * ATS-friendly resume:
 * - Single column, no tables / columns / icons / images
 * - Standard section headings (Work Experience, Education, Skills, ...)
 * - Plain black text on white, standard Arial-family font
 * - Real bullet lists, plain-text links
 */

const printStyles = `
@page { size: A4; margin: 12mm; }
@media print {
  html, body { background: #fff !important; }
  #resume-sheet { font-family: Arial, Helvetica, sans-serif; color: #000; }
  #resume-sheet a { color: #000; text-decoration: none; }
}
`;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-4">
    <h2 className="text-[12pt] font-bold uppercase tracking-wide border-b border-black pb-0.5 mb-2">
      {title}
    </h2>
    {children}
  </section>
);

const Resume = () => {
  const allCerts = [...cybersecurityCerts, ...technicalCerts, ...googleCredentials];

  return (
    <div className="min-h-screen bg-muted/40 py-8 print:bg-white print:py-0">
      <style>{printStyles}</style>

      <div className="max-w-[800px] mx-auto px-4 mb-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
        >
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          <Download className="w-4 h-4" /> Download Resume (PDF)
        </button>
      </div>
      <p className="max-w-[800px] mx-auto px-4 mb-4 text-xs text-muted-foreground print:hidden">
        ATS-friendly format: single column, standard headings, plain text links, no images or
        tables — safe for resume parsing software.
      </p>

      <article
        id="resume-sheet"
        className="max-w-[800px] mx-auto bg-white text-black shadow-lg print:shadow-none p-10 print:p-0 text-[10.5pt] leading-snug"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <header className="mb-4">
          <h1 className="text-[20pt] font-bold leading-tight">{profile.name}</h1>
          <p className="font-semibold">{profile.title}</p>
          <p>
            {profile.email} | {profile.phone} | {profile.location}
          </p>
          <p className="break-words">
            {profile.links.map((l) => `${l.label}: ${l.url}`).join(" | ")}
          </p>
        </header>

        <Section title="Professional Summary">
          <p>{profile.summary}</p>
        </Section>

        <Section title="Technical Skills">
          <ul className="space-y-0.5">
            {skillCategories.map((cat) => (
              <li key={cat.title}>
                <span className="font-bold">{cat.title}: </span>
                {cat.skills.map((s) => s.name).join(", ")}
              </li>
            ))}
            <li>
              <span className="font-bold">Core Strengths: </span>
              {expertise.map((e) => e.title).join(", ")}
            </li>
          </ul>
        </Section>

        <Section title="Work Experience">
          <div className="space-y-3">
            {experiences.map((exp) => (
              <div key={exp.role + exp.company} className="break-inside-avoid">
                <p className="font-bold">{exp.role}</p>
                <p>
                  {exp.company}
                  {exp.location ? ` — ${exp.location}` : ""} | {exp.period}
                </p>
                {exp.responsibilities?.length > 0 && (
                  <ul className="list-disc pl-5 mt-0.5">
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
          <ul className="space-y-1">
            {educationData.map((edu) => (
              <li key={edu.degree}>
                <span className="font-bold">{edu.degree}</span> — {edu.institution} | {edu.cgpa} |{" "}
                {edu.status}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Research and Publications">
          <ul className="space-y-1">
            {profile.research.map((r) => (
              <li key={r.title}>
                <span className="font-bold">{r.title}</span> — {r.note}. {r.url}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Projects">
          <div className="space-y-2">
            {projects.map((p) => (
              <div key={p.title} className="break-inside-avoid">
                <p className="font-bold">{p.title}</p>
                <p>{p.description}</p>
                <p>
                  <span className="font-bold">Technologies: </span>
                  {p.technologies.join(", ")}
                  {p.github ? ` | ${p.github}` : ""}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Certifications">
          <ul className="list-disc pl-5 space-y-0.5">
            {allCerts.map((c) => (
              <li key={c.name + c.issuer}>
                {c.name} — {c.issuer}
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </div>
  );
};

export default Resume;
