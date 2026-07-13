"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {

    console.log("My ThemeProvider is rendering");
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      // disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}