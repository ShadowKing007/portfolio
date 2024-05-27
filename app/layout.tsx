import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibrahim's Portfolio",
  description: "Modern and Minimalist Portfolio",
  // Update the image property to contain the URL of your Open Graph image
  image: "/Portfolio.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:title" content="Ibrahim's Portfolio" />
        <meta property="og:description" content="Modern and Minimalist Portfolio" />
        {/* Update the og:image content to contain the URL of your Open Graph image */}
        <meta property="og:image" content={`https://ibrahim-web-portfolio.vercel.app/${metadata.image}`} />
        <link rel="icon" href="SI-black-logo.png" sizes="576px" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
