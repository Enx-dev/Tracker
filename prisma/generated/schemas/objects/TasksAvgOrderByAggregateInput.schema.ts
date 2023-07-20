import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksAvgOrderByAggregateInput> = z
  .object({
    labelsId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TasksAvgOrderByAggregateInputObjectSchema = Schema;
