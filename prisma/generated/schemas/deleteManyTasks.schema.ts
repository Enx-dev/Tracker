import { z } from 'zod';
import { TasksWhereInputObjectSchema } from './objects/TasksWhereInput.schema';

export const TasksDeleteManySchema = z.object({
  where: TasksWhereInputObjectSchema.optional(),
});
