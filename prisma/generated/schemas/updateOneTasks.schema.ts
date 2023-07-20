import { z } from 'zod';
import { TasksUpdateInputObjectSchema } from './objects/TasksUpdateInput.schema';
import { TasksUncheckedUpdateInputObjectSchema } from './objects/TasksUncheckedUpdateInput.schema';
import { TasksWhereUniqueInputObjectSchema } from './objects/TasksWhereUniqueInput.schema';

export const TasksUpdateOneSchema = z.object({
  data: z.union([
    TasksUpdateInputObjectSchema,
    TasksUncheckedUpdateInputObjectSchema,
  ]),
  where: TasksWhereUniqueInputObjectSchema,
});
