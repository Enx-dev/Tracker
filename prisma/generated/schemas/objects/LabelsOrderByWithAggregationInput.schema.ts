import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LabelsCountOrderByAggregateInputObjectSchema } from './LabelsCountOrderByAggregateInput.schema';
import { LabelsAvgOrderByAggregateInputObjectSchema } from './LabelsAvgOrderByAggregateInput.schema';
import { LabelsMaxOrderByAggregateInputObjectSchema } from './LabelsMaxOrderByAggregateInput.schema';
import { LabelsMinOrderByAggregateInputObjectSchema } from './LabelsMinOrderByAggregateInput.schema';
import { LabelsSumOrderByAggregateInputObjectSchema } from './LabelsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabelsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => LabelsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => LabelsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => LabelsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LabelsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => LabelsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const LabelsOrderByWithAggregationInputObjectSchema = Schema;
