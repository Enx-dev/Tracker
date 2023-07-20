import { z } from 'zod';
import { LabelsWhereInputObjectSchema } from './objects/LabelsWhereInput.schema';
import { LabelsOrderByWithAggregationInputObjectSchema } from './objects/LabelsOrderByWithAggregationInput.schema';
import { LabelsScalarWhereWithAggregatesInputObjectSchema } from './objects/LabelsScalarWhereWithAggregatesInput.schema';
import { LabelsScalarFieldEnumSchema } from './enums/LabelsScalarFieldEnum.schema';

export const LabelsGroupBySchema = z.object({
  where: LabelsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LabelsOrderByWithAggregationInputObjectSchema,
      LabelsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: LabelsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LabelsScalarFieldEnumSchema),
});
