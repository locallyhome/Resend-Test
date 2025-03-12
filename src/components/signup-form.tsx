"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignupForm = () => {
  const [state, setState] = useState<string>();

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setState("loading");

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        firstName: "Edgar",
      }),
    });
    setTimeout(() => {
      setState("ready");
    }, 1500);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
      <Label htmlFor="name">Name</Label>
      <input id="name" />
      <Label htmlFor="email">Email</Label>
      <input id="email" />
      <button className={buttonVariants()} disabled={state === "loading"}>
        {" "}
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
