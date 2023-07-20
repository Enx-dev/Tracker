import React, { useMemo } from "react";
import type { Metadata } from "next";
import { Tasks } from "@prisma/client";
import { ColumnDef, useReactTable } from "@tanstack/react-table";
import { prisma } from "@/app/lib/db";

async function DashboardHome() {
  const data = await prisma.tasks.findMany();
  return <div>DashboardHome</div>;
}

export default DashboardHome;
