"use client";
import { useTheme } from "next-themes";

export default function ToogleBtn() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="space-x-2 bg-black">
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
}
