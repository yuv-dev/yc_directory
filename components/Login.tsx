import { signIn } from "@/auth";
import React from "react";

const Login = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("", { redirectTo: "/" });
      }}
    >
      <button type="submit">LogIn</button>
    </form>
  );
};

export default Login;
