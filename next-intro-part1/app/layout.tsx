import React from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={roboto.className}>
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
