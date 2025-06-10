import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ["latin"], 
  variable: "--font-space-mono" 
});

export const metadata: Metadata = {
  title: "Jiawen Zhu - Web Developer & Data Analyst",
  description: "Bilingual U.S. citizen looking for challenging positions as software engineer or AWS cloud support/associate cloud architect. Experienced in web development, data analysis, and cloud technologies.",
  keywords: ["Jiawen Zhu", "Web Developer", "Data Analyst", "Software Engineer", "AWS", "Cloud Architect", "JavaScript", "Python", "R", "Tableau", "MySQL"],
  authors: [{ name: "Jiawen Zhu", url: "https://www.linkedin.com/in/zhu-jiawen-1b166430/" }],
  creator: "Jiawen Zhu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jiawenzhu.github.io/profile",
    title: "Jiawen Zhu - Web Developer & Data Analyst",
    description: "Professional portfolio showcasing web development and data analysis projects",
    siteName: "Jiawen Zhu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiawen Zhu - Web Developer & Data Analyst",
    description: "Professional portfolio showcasing web development and data analysis projects",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
