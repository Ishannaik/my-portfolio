import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishan's Portfolio",
  description:
    "Ishan's portfolio website showcasing projects built with Next.js and Tailwind CSS.",
  openGraph: {
    title: "Ishan Naik | Frontend Developer Portfolio",
    description:
      "Check out my portfolio website showcasing projects built with Next.js and Tailwind CSS.",
    url: "https://www.ishannaik.com",
    images: [
      {
        url: "https://www.ishannaik.com/preview.png", // The image you added to the public folder
        width: 1200, // Recommended width for Open Graph images
        height: 630, // Recommended height for Open Graph images
        alt: "Ishan Naik Portfolio Preview", // Alternate text for the image
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishan Naik | Frontend Developer Portfolio",
    description: "Showcasing projects built with Next.js and Tailwind CSS.",
    images: ["https://www.ishannaik.com/preview.png"], // Same image for Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.jpg" sizes="any" />
        <meta
          name="keywords"
          content="Next.js, Tailwind CSS, Frontend Developer, Portfolio"
        />
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
