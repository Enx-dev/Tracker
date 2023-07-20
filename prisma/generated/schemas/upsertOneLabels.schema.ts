import { z } from 'zod';
import { LabelsWhereUniqueInputObjectSchema } from './objects/LabelsWhereUniqueInput.schema';
import { LabelsCreateInputObjectSchema } from './objects/LabelsCreateInput.schema';
import { LabelsUncheckedCreateInputObjectSchema } from './objects/LabelsUncheckedCreateInput.schema';
import { LabelsUpdateInputObjectSchema } from './objects/LabelsUpdateInput.schema';
import { LabelsUncheckedUpdateInputObjectSchema } from './objects/LabelsUncheckedUpdateInput.schema';

export const LabelsUpsertSchema = z.object({
  where: LabelsWhereUniqueInputObjectSchema,
  create: z.union([
    LabelsCreateInputObjectSchema,
    LabelsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    LabelsUpdateInputObjectSchema,
    LabelsUncheckedUpdateInputObjectSchema,
  ]),
});
