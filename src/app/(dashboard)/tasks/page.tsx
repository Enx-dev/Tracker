import { DataTable } from "@/app/components/data-table";
import React, { use, useMemo } from "react";
import { prisma } from "@/app/lib/db";
import { columns } from "@/app/components/columns";
import moment from "moment";
import { getTasks } from "@/app/api/tasks";

async function page() {
  const data = await getTasks();
  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default page;
