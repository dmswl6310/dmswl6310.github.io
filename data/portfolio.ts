export type Project = {
  slug: string;
  type: string;
  category: string;
  problemType: string;
  featured: boolean;
  title: string;
  summary: string;
  highlight: string;
  evidence: string;
  media: string;
  mediaPurpose: string;
  role: string;
  period: string;
  contribution: string;
  stack: string[];
  context: string;
  thinking: string;
  actions: string[];
  results: string[];
};

export const profile = {
  name: "황은지",
  role: "Frontend Developer · 3년차",
  email: "hello@gmail.com",
  headline: "사용자가 막히는 순간을 줄이는 프론트엔드 개발자",
  intro:
    "저는 화면을 예쁘게 만드는 일보다, 사용자가 왜 헷갈리는지와 제품이 어디서 불안정해지는지를 먼저 봅니다. 의료기기 SW, 모바일 앱, 위치 기반 서비스, AI 기반 개인 프로젝트를 거치며 흐름을 단순하게 만들고, 성능과 안정성을 숫자로 확인하는 방식으로 개발해왔습니다.",
  links: [
    { label: "모두스팟", href: "https://moduspot.vercel.app/" },
    { label: "컴포넌트 갤러리", href: "https://comp-plus-three.vercel.app/" },
    { label: "오르리", href: "https://orri-climbing.vercel.app/" }
  ]
};

export const impacts = [
  {
    value: "40%",
    label: "입력 검증, 데이터 매핑 개선, 설치 안정화로 사용자 불만 감소에 기여",
    projectSlug: "medical-security-ux",
    projectLabel: "의료기기 SW 보안 UX"
  },
  {
    value: "3초 → 1초",
    label: "30MB 엑셀 결과 로딩을 행 단위 스트리밍 구조로 개선",
    projectSlug: "excel-streaming",
    projectLabel: "엑셀 스트리밍 개선"
  },
  {
    value: "23개 언어",
    label: "LinguiJS 기반 추출/검증 파이프라인으로 다국어 확장 시간 단축",
    projectSlug: "analysis-wizard",
    projectLabel: "분석 설정 위자드"
  }
];

export const processSteps = [
  {
    label: "문제 발견",
    body: "사용자가 막히는 지점과 제품이 불안정해지는 순간을 먼저 찾습니다."
  },
  {
    label: "판단",
    body: "기능 추가보다 흐름, 성능, 운영 제약 중 무엇이 핵심인지 나눕니다."
  },
  {
    label: "구현",
    body: "검증, 상태 관리, 데이터 처리 구조를 사용자 흐름에 맞춰 정리합니다."
  },
  {
    label: "검증",
    body: "수치, 피드백, QA 결과로 개선이 실제로 이어졌는지 확인합니다."
  }
];

export const principles = [
  {
    title: "흐름을 쪼개서 복잡도를 낮춥니다",
    body:
      "8개 설정 항목이 한 화면에 몰려 있던 PCR 분석 흐름을 3단계 위자드로 나누고, 각 단계에 필요한 검증과 툴팁을 배치했습니다."
  },
  {
    title: "성능 개선은 체감 지점에서 시작합니다",
    body:
      "느리다는 말만으로는 고칠 수 없어서, 데이터가 한 번에 메모리에 올라가는 지점을 병목으로 잡고 구조를 바꿨습니다."
  },
  {
    title: "협업도 제품 품질의 일부로 봅니다",
    body:
      "API 명세, 배포 환경, 문서 추적성처럼 화면 밖의 병목도 사용자 경험에 영향을 준다고 보고 함께 다룹니다."
  }
];

export const projects: Project[] = [
  {
    slug: "analysis-wizard",
    type: "Company · PCR Analysis Web App",
    category: "Company",
    problemType: "UX Flow",
    featured: true,
    title: "분석 전 설정 흐름을 다시 설계한 3단계 위자드",
    summary:
      "8개 분석 설정 항목을 사용자 사고 흐름 기준의 3단계로 나누어 설정 오류와 학습 부담을 줄였습니다.",
    highlight: "설정 오류율 20% 감소",
    evidence: "내부 클릭 로그와 사용자 피드백 기준",
    media: "[분석 설정 위자드 화면 캡처 필요]",
    mediaPurpose: "8개 설정 항목이 3단계로 분리된 흐름과 단계별 검증 방식을 보여주기",
    role: "프론트엔드 설계 및 구현",
    period: "회사 프로젝트",
    contribution: "설정 흐름 재구성, 검증 UI, 상태 관리 개선",
    stack: ["TypeScript", "React", "Electron", "Redux", "LinguiJS"],
    context:
      "기존 분석 프로그램은 시약, 분석 파일, 플레이트 수, 타겟 등 8개 항목을 한 화면에서 모두 설정해야 했습니다. 설정값 자체도 중요했지만, 더 큰 문제는 사용자가 지금 무엇을 결정해야 하는지 한눈에 이해하기 어렵다는 점이었습니다.",
    thinking:
      "처음에는 항목별 validation을 더 촘촘히 넣는 방식도 생각했습니다. 하지만 사용자의 오류는 단순한 입력 실수보다 흐름을 이해하지 못한 상태에서 발생하는 경우가 많았습니다. 그래서 항목을 기능 기준이 아니라 사용자의 사고 순서 기준으로 다시 묶었습니다.",
    actions: [
      "파일 선택, 분석 옵션, 검증 및 자동 저장의 3단계로 흐름을 재구성했습니다.",
      "각 단계의 판단 기준을 툴팁과 실시간 검증으로 보완했습니다.",
      "공통 파일 경로와 상태는 Redux로 관리해 props 전달과 중복 로직을 줄였습니다."
    ],
    results: [
      "내부 클릭 로그 기준 설정 오류율을 약 20% 줄였습니다.",
      "사용자로부터 매뉴얼 없이도 분석 설정 흐름을 이해할 수 있었다는 피드백을 받았습니다.",
      "엑셀 경로 관련 코드량을 약 20% 줄여 유지보수성과 코드 리뷰 효율을 개선했습니다."
    ]
  },
  {
    slug: "excel-streaming",
    type: "Company · Performance",
    category: "Company",
    problemType: "Performance",
    featured: true,
    title: "엑셀 로딩을 일괄 처리에서 스트리밍 구조로 변경",
    summary:
      "핵심 분석 파일 로딩을 행 단위 스트리밍 구조로 바꾸고, 비정상 값이 전체 처리를 멈추지 않도록 개선했습니다.",
    highlight: "30MB 로딩 3초 → 1초",
    evidence: "30MB 분석 파일 로딩 시간 기준",
    media: "[성능최적화 이미지 필요]",
    mediaPurpose: "일괄 로딩 구조와 행 단위 스트리밍 구조의 차이를 비교해서 보여주기",
    role: "성능 병목 분석 및 데이터 처리 개선",
    period: "회사 프로젝트",
    contribution: "스트리밍 처리, 예외 방어, 컬럼 매핑 안정화",
    stack: ["Node.js fs", "Electron", "Data Mapping", "Error Guard"],
    context:
      "PCR 분석 결과 로딩은 프로그램의 핵심 기능이었습니다. 30MB 규모 파일을 다룰 때 화면이 멈추거나 로딩이 길어져 사용 흐름이 끊기는 문제가 있었습니다.",
    thinking:
      "로딩 스피너를 추가하는 것만으로는 사용자의 불안을 줄일 수 없었습니다. 파일 전체를 한 번에 메모리에 올리는 구조 자체가 병목이었고, 일부 비정상 값이 전체 프로세스를 멈추게 했습니다.",
    actions: [
      "Node.js fs 스트리밍을 도입해 파일을 행 단위로 읽도록 변경했습니다.",
      "비정상 값이 도출되면 전체 프로세스를 중단하지 않고 해당 row를 건너뛰도록 방어 로직을 추가했습니다.",
      "컬럼 순서가 바뀌어도 이름 기반 map으로 매칭되도록 수정했습니다."
    ],
    results: [
      "30MB 기준 로딩 시간을 3초에서 1초로 단축했습니다.",
      "비정상 값이 있어도 나머지 데이터 처리를 이어가 프로그램 안정성을 높였습니다.",
      "잘못된 매칭으로 인한 분석 오류 위험을 낮추고 데이터 신뢰도를 개선했습니다."
    ]
  },
  {
    slug: "medical-security-ux",
    type: "Company · Legacy Desktop App",
    category: "Company",
    problemType: "Security UX",
    featured: true,
    title: "의료기기 SW의 보안 요구사항을 제품 UX로 풀어낸 작업",
    summary:
      "IVDR 대응을 위해 인증, 권한, 설치 안정화, 문서 추적성을 제품 사용 흐름 안에 녹였습니다.",
    highlight: "설치 오류 5건 → 0건",
    evidence: "설치 테스트와 사용자 불만 개선 항목 기준",
    media: "[회원가입 프로세스 동영상 필요]",
    mediaPurpose: "인증, 권한, 입력 검증, 설치 안정화가 제품 흐름 안에서 작동하는 방식 보여주기",
    role: "레거시 앱 기능 개선 및 배포 안정화",
    period: "회사 프로젝트",
    contribution: "인증/권한 UX, 설치 검증, 문서 추적성 정리",
    stack: ["Java", "Swing", "RBAC", "Inno Setup", "DHF"],
    context:
      "의료기기 소프트웨어 보안 요건이 강화되면서 사용자 식별, 권한 분리, 변경 이력 추적이 필요했습니다. 기존 레거시 데스크톱 앱에는 인증 체계와 권한별 접근 제어가 충분하지 않았습니다.",
    thinking:
      "인증과 권한 제어는 보안 기능이지만, 사용자 입장에서는 왜 막히는지 즉시 이해해야 신뢰할 수 있습니다. 폐쇄망 데스크톱 환경에서도 웹 수준의 반응형 UX를 제공하고 싶어 실시간 에러 메시지와 버튼 활성화 상태를 함께 설계했습니다.",
    actions: [
      "정규표현식 기반 입력 검증을 포함한 로그인과 회원가입 흐름을 구현했습니다.",
      "RBAC 기반 접근 제어와 관리자용 사용자 등록/편집 UI를 추가했습니다.",
      "설치 전 잔여 파일 탐색/삭제와 재사용 환경설정 검증 로직을 넣었습니다.",
      "요구사항, 설계, 테스트, 위험 항목을 Traceability Matrix로 연결했습니다."
    ],
    results: [
      "설치 테스트 오류를 5건에서 0건으로 줄였습니다.",
      "사용자 불만 건수 40% 감소에 기여했습니다.",
      "문서 간 추적성을 확보해 감사 대응과 변경 이력 관리가 쉬워졌습니다."
    ]
  },
  {
    slug: "moduspot",
    type: "Personal · 모두스팟",
    category: "Personal",
    problemType: "Decision UX",
    featured: false,
    title: "여러 출발지의 이동 시간을 공평하게 비교하는 서비스",
    summary:
      "다중 출발지와 목적지 조합을 비교해 약속 장소 결정의 피로를 줄이는 추천 서비스를 만들었습니다.",
    highlight: "FCP 2.2초 → 1.2초",
    evidence: "초기 렌더링 성능 측정 기준",
    media: "[다중 경로 비교 UI 동영상 필요]",
    mediaPurpose: "여러 출발지와 후보 장소의 이동 시간 편차를 비교하는 흐름 보여주기",
    role: "개인 프로젝트 전체 설계 및 구현",
    period: "개인 프로젝트",
    contribution: "RSC 구조, 경로 비교 UX, SEO와 성능 개선",
    stack: ["Next.js", "RSC", "ODsay API", "Supabase", "SEO"],
    context:
      "약속 장소를 정할 때 누군가에게 이동 시간이 몰리는 문제가 자주 발생합니다. 모두스팟은 여러 출발지와 목적지를 비교해 상대적으로 공평한 후보를 찾는 서비스입니다.",
    thinking:
      "핵심은 정답 장소를 하나 던지는 것이 아니라, 비교 과정의 피로를 줄이는 것이었습니다. 그래서 여러 조합의 이동 시간을 표처럼 비교하고, 이동 시간 편차가 적은 후보를 강조하는 방식으로 의사결정 비용을 낮췄습니다.",
    actions: [
      "Next.js App Router와 RSC 구조를 도입해 초기 자바스크립트 부담을 줄였습니다.",
      "무거운 연산은 서버 쪽으로 분리하고, 계산이 끝난 조합부터 점진적으로 보여주는 스트리밍 구조를 설계했습니다.",
      "JSON-LD, Sitemap, Robots, ads.txt를 정리해 검색 노출과 애드센스 심사 기반을 만들었습니다."
    ],
    results: [
      "초기 렌더링 FCP를 2.2초에서 1.2초로 단축했습니다.",
      "자바스크립트 번들 크기를 38% 줄였습니다.",
      "SEO 점수 100점과 애드센스 심사 기반을 확보했습니다."
    ]
  },
  {
    slug: "rajabong",
    type: "Personal · 라자봉",
    category: "Personal",
    problemType: "Concurrency",
    featured: false,
    title: "중복 신청과 운영 비용을 줄인 봉사활동 커뮤니티",
    summary:
      "봉사활동 모집과 신청 흐름에서 동시성 문제와 이미지 비용 문제를 함께 방어했습니다.",
    highlight: "잘못된 신청 0건",
    evidence: "신청 검증 케이스와 운영 시나리오 기준",
    media: "[봉사활동 신청 플로우 동영상 필요]",
    mediaPurpose: "신청 버튼, 서버 검증, 모집 상태 방어가 함께 작동하는 흐름 보여주기",
    role: "개인 프로젝트 전체 설계 및 구현",
    period: "개인 프로젝트",
    contribution: "서버 액션 검증, 이미지 압축, 운영 비용 관리",
    stack: ["Next.js", "Supabase", "Server Action", "Image Compression"],
    context:
      "봉사활동 참여 신청 시 주최자에게 승인 요청이 가는 구조였습니다. 통신 지연, 버튼 연타, 마감 기한 경과, 모집 인원 초과가 동시에 얽히면 모집 상태와 사용자 액션이 불일치할 수 있었습니다.",
    thinking:
      "신청 버튼을 막는 것만으로는 동시성 문제를 해결했다고 보기 어려웠습니다. 사용자는 빠르게 반응을 받아야 하지만, 최종 판단은 서버와 DB 기준으로 다시 확인해야 했습니다.",
    actions: [
      "신청 버튼에 디바운스와 요청 중 클릭 제한을 적용했습니다.",
      "클라이언트에서 마감 시간과 현재 인원을 먼저 확인하고, 서버 액션에서 DB 기준으로 한 번 더 검증했습니다.",
      "업로드 전 이미지를 300KB 이하로 압축하고 Supabase Storage 직접 서빙 구조를 적용했습니다.",
      "부적절한 텍스트는 클라이언트 제출 단계에서 정규표현식 기반으로 선제 차단했습니다."
    ],
    results: [
      "중복 신청과 마감 후 신청 같은 잘못된 사용자 액션 케이스를 0건으로 방어했습니다.",
      "무료 티어 내에서 이미지 2,500건 이상을 처리할 수 있는 저장 구조를 마련했습니다.",
      "운영자의 사후 모니터링 부담을 줄이고 커뮤니티 품질 관리 기준을 만들었습니다."
    ]
  },
  {
    slug: "orri",
    type: "Team · 오르리",
    category: "Team",
    problemType: "Location Accuracy",
    featured: false,
    title: "위치 정확도와 배포 병목을 함께 개선한 암장 검색 서비스",
    summary:
      "PC 환경의 낮은 위치 정확도를 fallback 구조로 보완하고, 테스트 배포 병목을 자동화로 줄였습니다.",
    highlight: "위치 정확도 70% 향상",
    evidence: "PC 위치 검색 정확도와 테스트 배포 시간 기준",
    media: "[위치기반 검색 화면 캡처 필요]",
    mediaPurpose: "낮은 GPS 정확도를 감지하고 행정 단위 fallback으로 이어지는 검색 흐름 보여주기",
    role: "프론트엔드 기능 구현 및 배포 자동화",
    period: "팀 프로젝트",
    contribution: "위치 fallback, 로그인 흐름 복원, 자동 배포 환경 구성",
    stack: ["Next.js", "TypeScript", "Styled Components", "GitHub Actions", "Vercel"],
    context:
      "기존 암장 검색은 이름을 직접 입력해야 했고, 주변 암장을 빠르게 찾기 어려웠습니다. 위치 기반 기능을 도입했지만 PC 환경의 Geolocation 정확도가 낮아 잘못된 위치 정보가 표시되는 문제가 있었습니다.",
    thinking:
      "위치 기반 서비스에서 잘못된 좌표는 단순한 버그가 아니라 검색 결과 전체의 신뢰도를 떨어뜨리는 문제였습니다. 정확도 값을 기준으로 GPS 응답을 신뢰할지 판단하고, 필요하면 재요청하거나 행정 단위 검색으로 대체하는 구조를 설계했습니다.",
    actions: [
      "accuracy 임계값을 기준으로 위치 응답을 판단하고 낮을 경우 재요청하도록 구성했습니다.",
      "재요청 후에도 신뢰도가 낮으면 행정 단위 fallback으로 검색 흐름을 이어갔습니다.",
      "OAuth 리다이렉트 전 사용자 페이지 정보를 세션 스토리지에 저장해 로그인 후 원래 흐름을 복원했습니다.",
      "GitHub Actions로 개인 레포와 Vercel 배포를 연결해 실시간 테스트 환경을 만들었습니다."
    ],
    results: [
      "PC 기준 위치 검색 정확도를 약 70% 개선했습니다.",
      "추정 거리 오차를 50km 이상에서 1km 내로 줄였습니다.",
      "커밋 후 평균 1.5분 내 자동 배포가 가능해 테스트 주기를 단축했습니다."
    ]
  }
];

export const experience = [
  {
    period: "2021.04 - 2023.11",
    title: "씨젠 Application SW팀 · 주임/계장",
    body:
      "PCR 분석 소프트웨어의 신규 웹앱 개발, 레거시 데스크톱 앱 유지보수/배포, 생활검사 모바일 앱 개발을 담당했습니다. 의료기기 SW 특성상 기능 구현뿐 아니라 보안 요구사항, 문서 추적성, 배포 안정성까지 함께 고려해야 했습니다.",
    stack: ["React", "TypeScript", "Electron", "Java Swing", "Flutter", "Figma"]
  },
  {
    period: "2015.03 - 2020.08",
    title: "경북대학교 심화컴퓨터공학 졸업",
    body:
      "발달장애 아동을 위한 리듬 교정식 음악 치료 앱을 졸업논문으로 진행했습니다. 이후에도 사용자의 행동 변화와 제품의 실제 쓰임을 함께 보는 관점이 개발 방식에 남아 있습니다.",
    stack: []
  }
];

export const skills = [
  {
    title: "Frontend Architecture",
    body: "React, Next.js, TypeScript 기반으로 화면 흐름, 상태, 데이터 로딩 책임을 분리합니다.",
    related: ["analysis-wizard", "moduspot"]
  },
  {
    title: "UX Engineering",
    body: "위자드, 실시간 검증, skeleton UI, responsive layout으로 사용자의 막힘을 줄입니다.",
    related: ["analysis-wizard", "medical-security-ux"]
  },
  {
    title: "Performance",
    body: "스트리밍, lazy loading, 디바운스, 번들 최적화로 체감 성능을 개선합니다.",
    related: ["excel-streaming", "moduspot"]
  },
  {
    title: "Delivery",
    body: "GitHub Actions, Vercel, 문서화, 테스트 산출물 관리로 배포와 협업 리듬을 만듭니다.",
    related: ["orri", "medical-security-ux"]
  }
];
