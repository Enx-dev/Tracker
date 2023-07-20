import { z } from 'zod';
import { TasksWhereUniqueInputObjectSchema } from './objects/TasksWhereUniqueInput.schema';

export const TasksDeleteOneSchema = z.object({
  where: TasksWhereUniqueInputObjectSchema,
});
