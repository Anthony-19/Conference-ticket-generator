import type { Metadata } from "next";
import Image from "next/image";

import { inconsolata } from "@/fonts/font";

import "./globals.css";

export const metadata: Metadata = {
  title: "Conference Ticket Generator",
  description: "A simple and interactive web application that allows users to register for a coding conference, upload their avatar, and generate a unique ticket ID. All user data, including the uploaded image, is stored in `localStorage` and can be accessed on a confirmation page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable}`}>
        <div className="page">
          <div className="container">
        <div className="patternLine">
         
        </div>
        <div className="patternCircle">
          
        </div>
         <div className="patternSquiggleTop">
          
        </div>
        <div className="patternSquiggleBottom">
          
        </div>
        <section className="logoContainer">
          <Image
            className="logoIcon"
            alt="logo Icon"
            src="/images/logo-full.svg"
            width={200}
            height={50}
          />
        </section>
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}
