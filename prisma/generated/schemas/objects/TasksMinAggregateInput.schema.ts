import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    deadline: z.literal(true).optional(),
    priority: z.literal(true).optional(),
    status: z.literal(true).optional(),
    labelsId: z.literal(true).optional(),
  })
  .strict();

export const TasksMinAggregateInputObjectSchema = Schema;
