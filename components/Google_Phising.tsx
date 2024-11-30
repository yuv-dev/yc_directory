import { FlaskConical } from "lucide-react";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Google_Phising = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="flex flex-wrap justify-between px-10 py-4 font-medium text-sm text-black-100 border-black-300 shadow  ">
        <div className="flex flex-wrap justify-between  *:px-2">
          <Link href={"/"}>
            <p>About</p>
          </Link>
          <Link href={"/"}>
            <p>Store</p>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between text-sm text-black-100 *:px-2">
          <Link href={"/"}>Gmail</Link>
          <Link href={"/"}>Images</Link>
          <Link href={"/"}>
            <FlaskConical />
          </Link>
          <Link href={"/"}>
            <Image
              className=""
              src="/9dots.svg"
              alt="user icon image"
              width={25}
              height={25}
              priority
            />
          </Link>
          <Link href={"/"}>
            <Image
              className=""
              src="/user-icon.svg"
              alt="user icon image"
              width={25}
              height={25}
              priority
            />
          </Link>
        </div>
      </div>

      {/* main */}
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-8xl">Google</h1>
        <Form
          action="/"
          scroll={false}
          className="max-w-3xl w-full min-h-[60px] bg-white border-[1.5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5"
        >
          <input
            name="query"
            className="search-input font-light"
            placeholder="Search here"
          />
        </Form>

        <div className="flex flex-wrap mt-7 gap-5">
          <button className="button rounded border px-4 py-2 border-black-200 bg-slate-200 hover:shadow-lg">
            <span>Google Search</span>
          </button>
          <button className="button rounded border px-4 py-2 border-black-200 bg-slate-200 hover:shadow-lg">
            <span>I&apos;m Feeling Lucky</span>
          </button>
        </div>

        {/* Languages */}
        <div className="flex flex-row mt-7 *:mx-1 *:text-blue-500 hover:*:underline">
          <div>
            <span className="text-black">Google offered in:</span>
          </div>

          <span>हिन्दी</span>
          <span>বাংলা</span>
          <span>తెలుగు</span>
          <span>मराठी</span>
          <span>தமிழ்</span>
          <span>ગુજરાતી</span>
          <span>ಕನ್ನಡ</span>
          <span>മലയാളം</span>
          <span>ਪੰਜਾਬੀ</span>
        </div>
      </div>

      {/* Footer */}

      <div className=" w-full flex flex-col justify-between  font-medium text-sm text-black-100  absolute bottom-0 shadow-black-100 ">
        <div className="flex flex-wrap justify-between px-10 py-3.5  *:px-2 border-t border-gray-400 bg-slate-50">
          <Link href={"/"}>
            <p>India</p>
          </Link>
        </div>

        <div className="flex flex-wrap justify-between px-10 py-3.5 border-t border-gray-400 bg-slate-50 ">
          <div className="flex flex-wrap *:px-2 hover:*:underline">
            <Link href={"/"}>
              <p>Advetising</p>
            </Link>
            <Link href={"/"}>
              <p>Business</p>
            </Link>
            <Link href={"/"}>
              <p>How Search works</p>
            </Link>
          </div>
          
          <div className="flex flex-wrap *:px-2 hover:*:underline">
            <Link href={"/"}>
              <p>Privacy</p>
            </Link>
            <Link href={"/"}>
              <p>Terms</p>
            </Link>
            <Link href={"/"}>
              <p>Setting</p>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Google_Phising;
