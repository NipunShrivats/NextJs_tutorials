import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href={"/"}>Nipun LOGO</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
