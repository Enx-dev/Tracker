import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TasksOrderByRelationAggregateInputObjectSchema } from './TasksOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabelsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    Tasks: z
      .lazy(() => TasksOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const LabelsOrderByWithRelationInputObjectSchema = Schema;
