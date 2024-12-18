import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gagu",
  description: "편안한 가구의 만족을 향해",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

export default RootLayout;
