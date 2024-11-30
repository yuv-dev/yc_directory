import Image from "next/image";
import Link from "next/link";
import React from "react";


const Logo = () => {
  return (
    <div className="">
      <Link href="/">
      <Image 
        className="bg-white p-2 rounded-md"
        src="/logo.png"
        alt="YC_DIRECTORY logo"
        width={180}
        height={100}
        priority
      
      />
      </Link>
    </div>
  );
};

export default Logo;
