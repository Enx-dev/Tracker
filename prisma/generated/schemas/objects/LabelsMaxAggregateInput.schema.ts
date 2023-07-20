import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabelsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
  })
  .strict();

export const LabelsMaxAggregateInputObjectSchema = Schema;
