import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./responsive.css";
import { MemberProvider } from './context/MemberContext';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LifeIsSpeed Pvt. Ltd.",
  description: "Lifeis Concept is the result of business and life experience of our founder. He has a spectacular life story that involves unrelenting rigorous work, the work that involves interaction with many sides of human activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <MemberProvider member={null} wallet={null} downline={[]} iddownline={null} bintree={null}>
             {children}
          </MemberProvider>
      </body>
    </html>
  );
}
