import { z } from 'zod';
import { TasksCreateInputObjectSchema } from './objects/TasksCreateInput.schema';
import { TasksUncheckedCreateInputObjectSchema } from './objects/TasksUncheckedCreateInput.schema';

export const TasksCreateOneSchema = z.object({
  data: z.union([
    TasksCreateInputObjectSchema,
    TasksUncheckedCreateInputObjectSchema,
  ]),
});
