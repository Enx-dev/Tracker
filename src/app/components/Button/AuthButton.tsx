"use client";
import React from "react";
import { useSession } from "next-auth/react";
import SignInBTN from "./SignInBTN";
import SignoutBTN from "./SignoutBTN";
import { ButtonProps } from "../ui/button";

function AuthButton({ className }: ButtonProps) {
  const { data: session } = useSession();
  if (session) {
    return <SignoutBTN className={className} />;
  } else {
    return <SignInBTN className={className} />;
  }
}

export default AuthButton;
