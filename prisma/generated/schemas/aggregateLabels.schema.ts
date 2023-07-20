import { z } from 'zod';
import { LabelsOrderByWithRelationInputObjectSchema } from './objects/LabelsOrderByWithRelationInput.schema';
import { LabelsWhereInputObjectSchema } from './objects/LabelsWhereInput.schema';
import { LabelsWhereUniqueInputObjectSchema } from './objects/LabelsWhereUniqueInput.schema';
import { LabelsCountAggregateInputObjectSchema } from './objects/LabelsCountAggregateInput.schema';
import { LabelsMinAggregateInputObjectSchema } from './objects/LabelsMinAggregateInput.schema';
import { LabelsMaxAggregateInputObjectSchema } from './objects/LabelsMaxAggregateInput.schema';
import { LabelsAvgAggregateInputObjectSchema } from './objects/LabelsAvgAggregateInput.schema';
import { LabelsSumAggregateInputObjectSchema } from './objects/LabelsSumAggregateInput.schema';

export const LabelsAggregateSchema = z.object({
  orderBy: z
    .union([
      LabelsOrderByWithRelationInputObjectSchema,
      LabelsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LabelsWhereInputObjectSchema.optional(),
  cursor: LabelsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), LabelsCountAggregateInputObjectSchema])
    .optional(),
  _min: LabelsMinAggregateInputObjectSchema.optional(),
  _max: LabelsMaxAggregateInputObjectSchema.optional(),
  _avg: LabelsAvgAggregateInputObjectSchema.optional(),
  _sum: LabelsSumAggregateInputObjectSchema.optional(),
});
