import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TasksCountOrderByAggregateInputObjectSchema } from './TasksCountOrderByAggregateInput.schema';
import { TasksAvgOrderByAggregateInputObjectSchema } from './TasksAvgOrderByAggregateInput.schema';
import { TasksMaxOrderByAggregateInputObjectSchema } from './TasksMaxOrderByAggregateInput.schema';
import { TasksMinOrderByAggregateInputObjectSchema } from './TasksMinOrderByAggregateInput.schema';
import { TasksSumOrderByAggregateInputObjectSchema } from './TasksSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    deadline: z.lazy(() => SortOrderSchema).optional(),
    priority: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    labelsId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => TasksCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => TasksAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TasksMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TasksMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => TasksSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TasksOrderByWithAggregationInputObjectSchema = Schema;
