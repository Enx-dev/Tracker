import { z } from 'zod';
import { LabelsOrderByWithRelationInputObjectSchema } from './objects/LabelsOrderByWithRelationInput.schema';
import { LabelsWhereInputObjectSchema } from './objects/LabelsWhereInput.schema';
import { LabelsWhereUniqueInputObjectSchema } from './objects/LabelsWhereUniqueInput.schema';
import { LabelsScalarFieldEnumSchema } from './enums/LabelsScalarFieldEnum.schema';

export const LabelsFindFirstSchema = z.object({
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
  distinct: z.array(LabelsScalarFieldEnumSchema).optional(),
});
