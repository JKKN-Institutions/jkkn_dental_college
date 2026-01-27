import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JKKN Dental College & Hospital",
  description: "JKKN Dental College & Hospital - Providing quality education in dental surgery. Established in 1987, affiliated with Dr. MGR Medical University, Chennai.",
  keywords: "JKKN, Dental College, Hospital, BDS, MDS, Tamil Nadu, Dental Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased pt-32" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
