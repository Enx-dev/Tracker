import { Row } from "@tanstack/react-table";
import { prisma } from "@/app/lib/db";
import { Status, Tasks } from "@prisma/client";
import moment from "moment";

export const getTasks = async (): Promise<Tasks[]> => {
  const tasks = await prisma.tasks.findMany();
  const formattedDateTask = tasks.map((task) => {
    return {
      ...task,
      deadline: moment(new Date(task.deadline)).format("do-MMM-YYYY"),
    };
  });
  return formattedDateTask;
};

export const addTask = async (task: Tasks): Promise<Tasks> => {
  const newTask = await prisma.tasks.create({ data: task });
  return newTask;
};

export const deleteTask = async (id: number): Promise<Tasks> => {
  const deletedTask = await prisma.tasks.delete({ where: { id } });
  return deletedTask;
};

export const updateTask = async (id: number, task: Tasks): Promise<Tasks> => {
  const updatedTask = await prisma.tasks.update({ where: { id }, data: task });
  return updatedTask;
};

export const updateTaskStatus = async (id: number, status: Status) => {
  const updatedTask = await prisma.tasks.update({
    where: { id },
    data: { status },
  });
  return updatedTask;
};
