import { z } from 'zod';
import { LabelsWhereInputObjectSchema } from './objects/LabelsWhereInput.schema';

export const LabelsDeleteManySchema = z.object({
  where: LabelsWhereInputObjectSchema.optional(),
});
