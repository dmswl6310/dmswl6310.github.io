import type { Metadata } from "next";
import Link from "next/link";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "황은지 | Frontend Portfolio",
  description: "사용자 흐름과 제품 안정성을 함께 설계하는 프론트엔드 개발자 황은지의 포트폴리오"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="topbar">
          <nav className="nav" aria-label="주요 메뉴">
            <Link className="brand" href="/">
              <span className="brand-mark">HE</span>
              <span>황은지</span>
            </Link>
            <div className="nav-links">
              <Link href="/#story">일하는 방식</Link>
              <Link href="/#projects">프로젝트</Link>
              <Link href="/#experience">경력</Link>
              <Link href="/#skills">역량</Link>
              <Link href="/#contact">연락처</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer>
          <span>© 2026 Hwang Eunji. Built with Next.js SSG for GitHub Pages.</span>
        </footer>
      </body>
    </html>
  );
}
