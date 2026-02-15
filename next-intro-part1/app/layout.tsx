import React from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
