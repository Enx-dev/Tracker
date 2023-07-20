import { z } from 'zod';
import { TasksCreateManyInputObjectSchema } from './objects/TasksCreateManyInput.schema';

export const TasksCreateManySchema = z.object({
  data: z.union([
    TasksCreateManyInputObjectSchema,
    z.array(TasksCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
