import { z } from 'zod';
import { LabelsWhereUniqueInputObjectSchema } from './objects/LabelsWhereUniqueInput.schema';

export const LabelsDeleteOneSchema = z.object({
  where: LabelsWhereUniqueInputObjectSchema,
});
