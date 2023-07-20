import { z } from 'zod';
import { TasksWhereInputObjectSchema } from './TasksWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksListRelationFilter> = z
  .object({
    every: z.lazy(() => TasksWhereInputObjectSchema).optional(),
    some: z.lazy(() => TasksWhereInputObjectSchema).optional(),
    none: z.lazy(() => TasksWhereInputObjectSchema).optional(),
  })
  .strict();

export const TasksListRelationFilterObjectSchema = Schema;
