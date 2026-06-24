# Hwang Eunji Portfolio

프론트엔드 개발자 황은지의 포트폴리오 사이트입니다.

이 사이트는 이력서와 역량분해표를 바탕으로, 단순한 기술 나열보다 문제를 바라본 방식과 의사결정의 이유가 보이도록 구성했습니다.

## Tech Stack

- Next.js
- TypeScript
- React
- Static Site Generation
- GitHub Pages

## Project Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  projects/
    [slug]/
      page.tsx
data/
  portfolio.ts
.github/
  workflows/
    deploy-pages.yml
```

## Pages

- `/`: 메인 포트폴리오 페이지
- `/projects/[slug]`: 프로젝트 상세 페이지

메인 페이지에서는 프로젝트를 배너형 카드로 짧게 보여주고, 상세 페이지에서 프로젝트의 배경, 판단 과정, 실행 내용, 결과를 자세히 설명합니다.

## Development

```bash
npm install
npm run dev
```

기본 개발 서버는 `http://localhost:3000`에서 실행됩니다.

## Build

```bash
npm run build
```

`next.config.mjs`의 `output: "export"` 설정으로 정적 사이트가 생성됩니다.

## Deployment

`master` 브랜치에 push되면 GitHub Actions가 실행됩니다.

배포 흐름은 다음과 같습니다.

1. GitHub Actions에서 의존성을 설치합니다.
2. `npm run build`를 실행합니다.
3. 생성된 `out/` 결과물을 GitHub Pages에 배포합니다.

따라서 로컬에서 `out/` 폴더를 직접 커밋하지 않습니다.

## Content Editing

포트폴리오 문구와 프로젝트 내용은 [data/portfolio.ts](data/portfolio.ts)에 모아두었습니다.

프로젝트를 추가하거나 수정할 때는 `projects` 배열을 수정하면 됩니다.

## Commit Convention

커밋 메시지는 아래 형식을 따릅니다.

```txt
type(scope): 제목

본문
```

예시:

```txt
feat(project): 프로젝트 상세 페이지 추가

각 프로젝트의 배경, 판단 과정, 실행 내용, 결과를 정적 상세 페이지로 분리한다.
generateStaticParams를 사용해 빌드 시 상세 라우트를 미리 생성한다.
```

헤더는 conventional commit 형식을 사용하고, 본문은 한글로 작성합니다.
