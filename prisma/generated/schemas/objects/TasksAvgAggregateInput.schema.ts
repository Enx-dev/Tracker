import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksAvgAggregateInputType> = z
  .object({
    labelsId: z.literal(true).optional(),
  })
  .strict();

export const TasksAvgAggregateInputObjectSchema = Schema;
