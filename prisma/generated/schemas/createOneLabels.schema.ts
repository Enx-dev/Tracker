import { z } from 'zod';
import { LabelsCreateInputObjectSchema } from './objects/LabelsCreateInput.schema';
import { LabelsUncheckedCreateInputObjectSchema } from './objects/LabelsUncheckedCreateInput.schema';

export const LabelsCreateOneSchema = z.object({
  data: z.union([
    LabelsCreateInputObjectSchema,
    LabelsUncheckedCreateInputObjectSchema,
  ]),
});
