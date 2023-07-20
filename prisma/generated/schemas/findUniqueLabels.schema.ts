import { z } from 'zod';
import { LabelsWhereUniqueInputObjectSchema } from './objects/LabelsWhereUniqueInput.schema';

export const LabelsFindUniqueSchema = z.object({
  where: LabelsWhereUniqueInputObjectSchema,
});
