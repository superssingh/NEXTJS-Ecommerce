"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarData = {
  menus: [
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Cart",
      path: "/cart",
    },
  ],
  brandName: "Ecommerce",
  brandLogo: "",
  social: [
    { twitter: "", icon: "" },
    { youtube: "", icon: "" },
    { Linkedin: "", icon: "" },
  ],
};

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClicked = async () => {
    setClicked(!clicked);
  };

  return (
    <div className="Navigation">
      <div>
        <header className="relative border-b border-slate-500/[.0]  ">
          {/* <Link
            className="w-48 center-center mx-8 hover:hue-rotate-180 transition-all duration-700"
            href="/"
          >
            <Image
              src={NavbarData.brandLogo}
              alt={NavbarData.brandName}
              priority
              placeholder="blur"
            />
          </Link> */}
          <ul className="flex relative bg-white place-content-end">
            {NavbarData.menus.map((m, i) => {
              return (
                <li key={i} className="relative">
                  {/* <span>{m.icon}</span> */}
                  <Link
                    href={m.path}
                    className="grid relative  p-2 m-1 rounded hover:bg-slate-300  focus:bg-teal-500 focus:text-white"
                  >
                    {m.name}
                  </Link>
                </li>
              );
            })}
            <li></li>
          </ul>
        </header>
      </div>
    </div>
  );
}
