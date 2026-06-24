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

  return (
    <main>
      <section className="section detail-hero">
        <p className="detail-kicker">{project.type}</p>
        <h1 className="detail-title">{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <div className="pager">
          <Link className="button secondary" href="/#projects">
            프로젝트 목록
          </Link>
        </div>
      </section>

      <section className="section detail-layout" aria-label="프로젝트 상세">
        <aside className="detail-aside">
          <div className="detail-card">
            <p className="detail-kicker">대표 성과</p>
            <h2>{project.highlight}</h2>
            <Stack items={project.stack} />
          </div>
          <figure className="media-slot" role="img" aria-label={project.media}>
            <span>{project.media}</span>
          </figure>
        </aside>

        <div>
          <section className="detail-section">
            <h2>문제의 배경</h2>
            <div className="detail-card">
              <p>{project.context}</p>
            </div>
          </section>

          <section className="detail-section">
            <h2>제가 중요하게 본 지점</h2>
            <div className="thinking">
              <p>{project.thinking}</p>
            </div>
          </section>

          <section className="detail-section">
            <h2>실행한 일</h2>
            <ul className="detail-list">
              {project.actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2>결과</h2>
            <ul className="detail-list">
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
