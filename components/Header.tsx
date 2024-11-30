import React from "react";
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import { auth } from "@/auth";
import Login from "./Login";
import Account from "./Account";
import Image from "next/image";

const Header = async () => {
  const session = await auth();

  return (
    <header className="bg-white px-10 shadow-md sticky top-0 z-20">
      <nav className="flex flex-row justify-between items-center text-black">
        <Logo />
        <Menu />
        {session && session?.user ? (
          <>
            <div className="group p-2">
              <button
                id="dropdownDelayButton"
                data-dropdown-toggle="dropdownDelay"
                data-dropdown-delay="500"
                data-dropdown-trigger="hover"
                className="text-black flex flex-row flex-wrap items-center "
                type="button"
              >
                <Image
                  className=""
                  src="/user-icon.svg"
                  alt="user icon image"
                  width={60}
                  height={80}
                  priority
                />
                <h4 className="pl-4 font-medium">{session?.user?.name}</h4>
              </button>
              <Account id={session?.user?.id} />
            </div>
          </>
        ) : (
          <Login />
        )}
      </nav>
    </header>
  );
};

export default Header;
