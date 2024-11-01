import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SectionContainer from "@/components/SectionContainer";
import Head from "next/head";
import siteMetadata from "@/lib/sitemapData";

export const metadata: Metadata = {
  title: "Himanshu Joshi",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>{"Portfolio"}</title>
        <meta name="description" content={"Himanshu Joshi"} />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <html lang={siteMetadata.language} suppressHydrationWarning>
        <body
          className={`bg-white pl-[calc(80vw-80%)] text-black antialiased dark:bg-gray-800/25 dark:text-white`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SectionContainer>
              <div className="flex h-screen flex-col justify-between font-sans">
                <main className="mb-auto border-red-50">{children}</main>
              </div>
            </SectionContainer>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
