import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { signOut } from "next-auth/react";

function SignoutBTN({ className }: ButtonProps) {
  return (
    <Button className={className} variant="ghost" onClick={() => signOut()}>
      SignoutBTN
    </Button>
  );
}

export default SignoutBTN;
