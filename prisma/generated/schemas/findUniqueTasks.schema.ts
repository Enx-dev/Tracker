import { z } from 'zod';
import { TasksWhereUniqueInputObjectSchema } from './objects/TasksWhereUniqueInput.schema';

export const TasksFindUniqueSchema = z.object({
  where: TasksWhereUniqueInputObjectSchema,
});
