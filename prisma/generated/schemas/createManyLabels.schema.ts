import { z } from 'zod';
import { LabelsCreateManyInputObjectSchema } from './objects/LabelsCreateManyInput.schema';

export const LabelsCreateManySchema = z.object({
  data: z.union([
    LabelsCreateManyInputObjectSchema,
    z.array(LabelsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
