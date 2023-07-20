import React from "react";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { Drawer } from "@/app/components";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/?callbackUrl=/home");
  }
  return (
    <main className="flex min-h-screen w-full">
      <Drawer />
      <div className="w-full">{children}</div>
    </main>
  );
}

export default DashboardLayout;
