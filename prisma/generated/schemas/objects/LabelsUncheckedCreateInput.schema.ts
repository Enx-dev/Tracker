import { z } from 'zod';
import { TasksUncheckedCreateNestedManyWithoutLabelInputObjectSchema } from './TasksUncheckedCreateNestedManyWithoutLabelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabelsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    Tasks: z
      .lazy(() => TasksUncheckedCreateNestedManyWithoutLabelInputObjectSchema)
      .optional(),
  })
  .strict();

export const LabelsUncheckedCreateInputObjectSchema = Schema;
