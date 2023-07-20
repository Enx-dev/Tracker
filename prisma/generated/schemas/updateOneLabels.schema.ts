import { z } from 'zod';
import { LabelsUpdateInputObjectSchema } from './objects/LabelsUpdateInput.schema';
import { LabelsUncheckedUpdateInputObjectSchema } from './objects/LabelsUncheckedUpdateInput.schema';
import { LabelsWhereUniqueInputObjectSchema } from './objects/LabelsWhereUniqueInput.schema';

export const LabelsUpdateOneSchema = z.object({
  data: z.union([
    LabelsUpdateInputObjectSchema,
    LabelsUncheckedUpdateInputObjectSchema,
  ]),
  where: LabelsWhereUniqueInputObjectSchema,
});
