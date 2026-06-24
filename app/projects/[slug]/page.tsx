import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function Stack({ items }: { items: string[] }) {
  return (
    <div className="stack">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다"
    };
  }

  return {
    title: `${project.title} | 황은지`,
    description: project.summary
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectSummary = [
    { label: "역할", value: project.role },
    { label: "기간", value: project.period },
    { label: "기여", value: project.contribution },
    { label: "문제 유형", value: project.problemType }
  ];

  return (
    <main>
      <section className="section detail-hero">
        <p className="detail-kicker">{project.type}</p>
        <h1 className="detail-title">{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <div className="detail-summary-grid" aria-label="프로젝트 요약">
          {projectSummary.map((item) => (
            <div className="summary-chip" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
        <div className="pager">
          <Link className="button secondary" href="/#projects">
            프로젝트 목록
          </Link>
        </div>
      </section>

      <section className="section detail-layout" aria-label="프로젝트 상세">
        <aside className="detail-aside">
          <div className="detail-card result-card">
            <p className="detail-kicker">핵심 성과</p>
            <h2>{project.highlight}</h2>
            <p>{project.evidence}</p>
            <Stack items={project.stack} />
          </div>
          <figure className="media-slot" role="img" aria-label={project.media}>
            <span>{project.media}</span>
            <figcaption>{project.mediaPurpose}</figcaption>
          </figure>
        </aside>

        <div className="case-study">
          <section className="detail-section">
            <p className="section-number">01</p>
            <h2>문제와 배경</h2>
            <div className="detail-card">
              <p>{project.context}</p>
            </div>
          </section>

          <section className="detail-section">
            <p className="section-number">02</p>
            <h2>중요하게 본 지점</h2>
            <div className="thinking">
              <p>{project.thinking}</p>
            </div>
          </section>

          <section className="detail-section">
            <p className="section-number">03</p>
            <h2>실행한 일</h2>
            <ol className="detail-list stepped">
              {project.actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="detail-section">
            <p className="section-number">04</p>
            <h2>결과</h2>
            <ul className="detail-list result-list">
              {project.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="pager">
            <Link className="button primary" href="/#projects">
              다른 프로젝트 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
