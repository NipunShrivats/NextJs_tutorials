"use client";

import React from "react";
import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";
import Header from "../layout/header";
import { cn } from "cn";
import Footer from "../layout/footer";

interface themeProviderProps extends ThemeProviderProps {
  containerClassName?: string;
}

const ThemeProvider: React.FC<themeProviderProps> = ({
  children,
  containerClassName,
  ...props
}) => {
  return (
    <NextThemeProvider {...props}>
      <Header />
      <main
        className={cn(
          "container mx-auto flex min-h-0 flex-1 flex-col px-4",
          containerClassName,
        )}
      >
        {children}
      </main>
      <Footer />
    </NextThemeProvider>
  );
};

export default ThemeProvider;
