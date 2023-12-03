"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function ThemeSwitcher({ children }: any) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <div>
      The current theme is: {theme}
      <div>
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
