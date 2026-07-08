import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "./fonts/Rockybilly.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Rockybilly.ttf",
      weight: "700",
    },
  ],
  variable: "--font-myfont",
});