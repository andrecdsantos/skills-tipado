import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["300","500", "700","900"]
});

export const metadata: Metadata = {
  title: "Projeto de aprendizado ",
  description: "typescript",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col text-white bg-primary `}>
        <Header/>
        <main className="container flex-grow mx-auto py-4 text-center sm:text-start">
          {children}
        </main>
        <Footer/>
        <ScrollTopButton />
      </body>
    </html>
  );
}
