import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Headers from "./components/Headers";
import { ThemeProvider } from "next-themes";
import HeaderBorder from "./components/HeaderBorder";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hem_is_here",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} >
        <Headers/>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
