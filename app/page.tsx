import Link from "next/link";
import {
  experience,
  impacts,
  principles,
  processSteps,
  profile,
  projects,
  skills
} from "@/data/portfolio";

function Stack({ items }: { items: string[] }) {
  if (!items.length) return null;

  return (
    <div className="stack">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main id="top">
      <section className="section hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="lead">{profile.intro}</p>
          <div className="process-strip" aria-label="작업 방식">
            {processSteps.map((step, index) => (
              <article className="process-step" key={step.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{step.label}</b>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="button primary" href="#projects">
              대표 프로젝트 보기
            </Link>
            <a className="button secondary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>

        <aside className="impact-board" aria-label="대표 성과">
          {impacts.map((item) => (
            <Link className="signal-card" href={`/projects/${item.projectSlug}`} key={item.value}>
              <span className="signal-project">{item.projectLabel}</span>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </Link>
          ))}
        </aside>
      </section>

      <section className="section" id="story" aria-labelledby="story-title">
        <div className="section-head">
          <h2 className="section-title" id="story-title">
            저는 문제를 이렇게 봅니다
          </h2>
          <p className="section-copy">
            이력서에는 보통 무엇을 구현했는지만 남습니다. 하지만 실제 개발에서 더 오래 남는 것은
            왜 그 구조를 골랐는지, 어떤 제약을 버텼는지, 그 선택이 사용자와 팀에 어떤 변화를
            만들었는지였습니다.
          </p>
        </div>
        <div className="story-band">
          {principles.map((item) => (
            <article className="story-item" key={item.title}>
              <b>{item.title}</b>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects" aria-labelledby="projects-title">
        <div className="section-head">
          <h2 className="section-title" id="projects-title">
            프로젝트
          </h2>
          <p className="section-copy">
            한 페이지에 모든 설명을 쌓기보다, 여기서는 핵심 문제와 성과만 배너처럼 보여줍니다.
            자세한 판단 과정과 구현 내용은 각 프로젝트 상세 페이지에서 볼 수 있습니다.
          </p>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <Link className="project-banner featured" href={`/projects/${project.slug}`} key={project.slug}>
              <div>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.problemType}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Stack items={project.stack} />
              </div>
              <div className="project-side">
                <span className="project-highlight">{project.highlight}</span>
                <span className="project-evidence">{project.evidence}</span>
                <span className="project-more">자세히 보기</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="project-archive" aria-label="보조 프로젝트">
          {otherProjects.map((project) => (
            <Link className="archive-row" href={`/projects/${project.slug}`} key={project.slug}>
              <div>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.problemType}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="archive-result">
                <strong>{project.highlight}</strong>
                <span>자세히 보기</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-title">
        <div className="section-head">
          <h2 className="section-title" id="experience-title">
            경력
          </h2>
          <p className="section-copy">
            공개 가능한 이미지가 없는 업무 경험은 결과보다 맥락과 책임 범위가 보이도록 정리했습니다.
          </p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-row" key={item.title}>
              <div className="period">{item.period}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Stack items={item.stack} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills" aria-labelledby="skills-title">
        <div className="section-head">
          <h2 className="section-title" id="skills-title">
            역량
          </h2>
          <p className="section-copy">
            기술 스택은 도구 목록으로 끝나지 않도록, 어떤 문제를 풀 때 사용했는지 기준으로
            묶었습니다.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-box" key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.body}</p>
              <div className="related-links" aria-label={`${skill.title} 관련 프로젝트`}>
                {skill.related.map((slug) => {
                  const project = projects.find((item) => item.slug === slug);
                  if (!project) return null;

                  return (
                    <Link href={`/projects/${project.slug}`} key={project.slug}>
                      {project.problemType}
                    </Link>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title" id="contact-title">
              제품의 흐름을 같이 고민하는 팀을 찾고 있습니다
            </h2>
            <p>
              사용자의 행동, 데이터의 안정성, 팀의 일하는 방식을 함께 보는 프론트엔드 개발자로
              성장하고 싶습니다.
            </p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {profile.links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
