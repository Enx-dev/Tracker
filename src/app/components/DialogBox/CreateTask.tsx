import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Input,
  Label,
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  useFormField,
  Select,
  SelectContent,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectSeparator,
  FormDescription,
  FormMessage,
  Textarea,
} from "@/app/components/ui";
import { DatePicker } from "./Date_Picker";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { ZodRawShape, z } from "zod";
import { Priority, Status, Tasks } from "@prisma/client";
import { TasksCreateOneSchema } from "~/schemas";

//* Handle Validation and Errors

function CreateTask() {
  const form = useForm<z.infer<typeof TasksCreateOneSchema>>({
    defaultValues: {
      id: nanoid(),
      deadline: new Date().toISOString(),
      description: "",
      priority: Priority.LOW,
      status: Status.TODO,
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create new task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new task</DialogTitle>
          <DialogDescription>Create a new task</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form action="">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Describe the task you want to create
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormDescription>
                    Describe the task you want to create
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DatePicker form={form} />
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={Priority.LOW}>Low</SelectItem>
                        <SelectItem value={Priority.MEDIUM}>Medium</SelectItem>
                        <SelectItem value={Priority.HIGH}>High</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={Status.TODO}>Todo</SelectItem>
                        <SelectItem value={Status.PENDING}>
                          In progress
                        </SelectItem>
                        <SelectItem value={Status.COMPLETED}>Done</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateTask;
