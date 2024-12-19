import { auth } from "@/auth";
import Login from "@/components/Login";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/api/auth/signin");

  return (
    <>
      {session ? (
        <section className="pink_container !min-h-[230px] ">
          <h1 className="heading">Submit your STARTUP</h1>
          <StartupForm />
        </section>
      ) : (
        <section className="pink_container !min-h-[230px] ">
          <div className="bg-white w-2/3 h-[300px] border-4 border-black rounded-md flex flex-col justify-center items-center gap-10 ">
            <div className="text-xl font-semibold text-center ">
              <h2 >
              Not Logged in?
              Click below to Login or Register now{" "}
              </h2>
              <h2 className="text-primary"> And create a new pitch for your startup </h2>
            </div>
            <div className="border-4 rounded border-primary px-5 py-1 text-xl font-semibold hover:bg-black hover:border-black hover:text-white">
              <Login />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default page;
