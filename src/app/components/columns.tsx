"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/app/components/ui/badge";
import { Checkbox } from "@/app/components/ui/checkbox";

import { Tasks } from "@prisma/client";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { StatusClass } from "@/classes";
import { cn } from "../lib/utils";

export const columns: ColumnDef<Tasks>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    enableHiding: false,
    enableSorting: false,
    // cell: ({ row }) => {
    //   const label = labels.find((label) => label.value === row.original.label);

    //   return (
    //     <div className="flex space-x-2">
    //       {label && <Badge variant="outline">{label.label}</Badge>}
    //       <span className="max-w-[500px] truncate font-medium">
    //         {row.getValue("title")}
    //       </span>
    //     </div>
    //   );
    // },
  },
  {
    accessorKey: "deadline",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Due date" />
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = new StatusClass(row.getValue("status"));
      return (
        <div className="flex w-[100px] items-center">
          <span className={cn(status?.getStatusColor)}>
            {status.statusLabel}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    // cell: ({ row }) => {
    //   const priority = priorities.find(
    //     (priority) => priority.value === row.getValue("priority")
    //   );

    //   if (!priority) {
    //     return null;
    //   }

    //   return (
    //     <div className="flex items-center">
    //       {priority.icon && (
    //         <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
    //       )}
    //       <span>{priority.label}</span>
    //     </div>
    //   );
    // },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
