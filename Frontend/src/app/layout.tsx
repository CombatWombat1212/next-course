import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getGlobalPageData, getGlobalPageMetadata } from "@/data/loaders";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";

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

export async function generateMetadata(): Promise<Metadata>{
  const metadata = await getGlobalPageMetadata();
  const {title, description} = metadata?.data; 

  return {
    title: title,
    description: description,
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalDataRaw = await getGlobalPageData();
  const globalData = globalDataRaw?.data || [];
  

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header data={globalData.header}/>
        <div>{children}</div>
        <Footer data={globalData.footer}/>
      </body>
    </html>
  );
}
