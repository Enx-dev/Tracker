import { prisma } from "@/app/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  let json = await request.json();
  console.log("called");

  // const updated_task = await prisma.tasks.update({
  //   where: { id },
  //   data: { status: json.status },
  // });

  // if (!updated_task) {
  //   return new NextResponse("No task with ID found", { status: 404 });
  // }

  // return NextResponse.json(updated_task);
}
