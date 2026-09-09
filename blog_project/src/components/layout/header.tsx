"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  // const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white text-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Nipun.
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-opacity hover:opacity-60"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login Button */}
        <Button>
          <Link href="/auth">Login</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
