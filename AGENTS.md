# Agent Guide

이 문서는 이 저장소에서 작업하는 에이전트가 따라야 할 기준입니다.

## 기본 원칙

- 현재 브랜치는 기본적으로 `dev`에서 작업합니다.
- 사용자가 커밋을 요청하면 커밋 후 `origin/dev`에 push합니다.
- `master`는 실제 GitHub Pages 배포 트리거입니다.
- 불필요한 빌드 산출물은 커밋하지 않습니다.
- 사용자 변경사항을 임의로 되돌리지 않습니다.

## 기술 구조

- Framework: Next.js
- Language: TypeScript
- Rendering: SSG, `output: "export"`
- Deploy: GitHub Actions + GitHub Pages

## 주요 파일

- `app/page.tsx`: 메인 포트폴리오 페이지
- `app/projects/[slug]/page.tsx`: 프로젝트 상세 페이지
- `app/layout.tsx`: 공통 레이아웃과 네비게이션
- `app/globals.css`: 전역 스타일
- `data/portfolio.ts`: 포트폴리오 콘텐츠 데이터
- `.github/workflows/deploy-pages.yml`: GitHub Pages 배포 workflow

## 작업 규칙

### 콘텐츠 수정

포트폴리오 문구, 프로젝트 설명, 경력, 역량은 우선 `data/portfolio.ts`에서 수정합니다.

컴포넌트에 문구를 직접 흩뿌리지 말고, 반복되거나 프로젝트별로 달라지는 내용은 데이터로 관리합니다.

### 페이지 수정

메인 페이지는 짧고 스캔하기 쉬운 구성을 유지합니다.

프로젝트의 긴 설명은 메인 페이지에 모두 넣지 말고 상세 페이지로 분리합니다.

### 스타일 수정

전역 스타일은 `app/globals.css`에서 관리합니다.

현재 디자인 방향은 다음과 같습니다.

- 심플하지만 첫 화면에서 눈에 띄는 타이포그래피
- 베이지/단색 위주의 과한 톤 지양
- 카드 반경은 8px 이하 유지
- 모바일에서 가로 스크롤이 생기지 않도록 확인
- 프로젝트 목록은 배너형 카드 중심으로 유지

### 빌드 확인

구조나 라우팅을 바꾼 뒤에는 다음 명령을 실행합니다.

```bash
npm run build
```

빌드 산출물인 `.next/`와 `out/`은 커밋하지 않습니다.

## 커밋 규칙

커밋은 변경 목적별로 작게 나눕니다.

커밋 전에는 `README.md`, `AGENTS.md`, `SKILL.md`에 반영할 내용이 있는지 확인합니다.
프로젝트 실행법, 배포 흐름, 작업 규칙처럼 다음 작업자에게 영향을 주는 변경만 문서에 반영하고, 사소한 UI 수정이나 일회성 변경은 문서에 추가하지 않습니다.

좋은 분리 예시:

- `build`: Next, TypeScript, 패키지, 빌드 설정 변경
- `feat(content)`: 포트폴리오 데이터 추가/수정
- `feat(portfolio)`: 메인 페이지 기능 또는 구성 변경
- `feat(project)`: 프로젝트 상세 페이지 변경
- `style`: 스타일만 변경
- `ci`: GitHub Actions 변경
- `docs`: 문서 변경

커밋 메시지 규칙:

- 헤더 형식은 `type(scope): 제목`
- 제목은 50자 이내
- 제목 끝에 마침표를 넣지 않음
- 본문은 한글로 작성
- 본문에는 무엇을 왜 바꿨는지 설명
- 한 커밋에 관련 없는 변경을 섞지 않음

## 배포

`master`에 push되면 GitHub Actions가 `npm run build`를 실행하고 `out/`을 GitHub Pages에 배포합니다.

로컬에서 직접 `out/`을 커밋하지 않습니다.
