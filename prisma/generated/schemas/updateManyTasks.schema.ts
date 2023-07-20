import { z } from 'zod';
import { TasksUpdateManyMutationInputObjectSchema } from './objects/TasksUpdateManyMutationInput.schema';
import { TasksWhereInputObjectSchema } from './objects/TasksWhereInput.schema';

export const TasksUpdateManySchema = z.object({
  data: TasksUpdateManyMutationInputObjectSchema,
  where: TasksWhereInputObjectSchema.optional(),
});
