import Link from "next/link";

import React from "react";

const Menu = () => {
  return (
    <div>
      <ul
        className="flex flex-row flex-wrap justify-center
       *:text-teal-900 *:font-semibold *:text-xs md:*:text-base
       md:*:px-8 md:*:pb-6 md:*:pt-7 *:px-4 *:pb-2 *:pt-2   
       hover:*:bg-primary hover:*:text-white "
      >
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>

        <Link href="/dashboard">
          <li className="underline">Dashboard</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
