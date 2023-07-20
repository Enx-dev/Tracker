import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { signIn } from "next-auth/react";

function SignInBTN({className}: ButtonProps) {
  return (
      <Button className={className}  onClick={() => signIn()}>
      Sign In
    </Button>
  );
}

export default SignInBTN;
