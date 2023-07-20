import { z } from 'zod';
import { LabelsUpdateManyMutationInputObjectSchema } from './objects/LabelsUpdateManyMutationInput.schema';
import { LabelsWhereInputObjectSchema } from './objects/LabelsWhereInput.schema';

export const LabelsUpdateManySchema = z.object({
  data: LabelsUpdateManyMutationInputObjectSchema,
  where: LabelsWhereInputObjectSchema.optional(),
});
