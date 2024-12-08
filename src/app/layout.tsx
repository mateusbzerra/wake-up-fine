import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@styles/tailwind.global.css";

const defaultFontFamily = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "WakeUp Fine",
  description: "Discover the best time to wake up based on your sleep cycles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${defaultFontFamily.className}  antialiased w-full max-w-3xl mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
