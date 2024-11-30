import Link from "next/link";
import React from "react";
import Logout from "./Logout";

type Props = {
  name: string;
  id: string;
};

const Account: React.FC<Props> = ({ id }) => {
  return (
    <div
      className="hidden flex-row wrap absolute 
                    hover:flex
                    group-hover:flex 
                    border-t border-primary
                    bg-white hover:*:bg-primary
                    right-0 top-19 w-fit h-fit 
                    *:py-2 *:px-8 *:border-x *:shadow-md
                    font-medium hover:*:text-white
                    shadow-md  
                    duration-100 delay-100 z-10"
    >
      <Link href="/startup/create">
        <span>Create Startup</span>
      </Link>
      <Link href={`/user/${id}`}>
        <span>Account</span>
      </Link>
      <Logout />
    </div>
  );
};

export default Account;
