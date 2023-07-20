import { z } from 'zod';
import { TasksWhereUniqueInputObjectSchema } from './objects/TasksWhereUniqueInput.schema';
import { TasksCreateInputObjectSchema } from './objects/TasksCreateInput.schema';
import { TasksUncheckedCreateInputObjectSchema } from './objects/TasksUncheckedCreateInput.schema';
import { TasksUpdateInputObjectSchema } from './objects/TasksUpdateInput.schema';
import { TasksUncheckedUpdateInputObjectSchema } from './objects/TasksUncheckedUpdateInput.schema';

export const TasksUpsertSchema = z.object({
  where: TasksWhereUniqueInputObjectSchema,
  create: z.union([
    TasksCreateInputObjectSchema,
    TasksUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TasksUpdateInputObjectSchema,
    TasksUncheckedUpdateInputObjectSchema,
  ]),
});
