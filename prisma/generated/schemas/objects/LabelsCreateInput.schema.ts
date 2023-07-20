import { z } from 'zod';
import { TasksCreateNestedManyWithoutLabelInputObjectSchema } from './TasksCreateNestedManyWithoutLabelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabelsCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    Tasks: z
      .lazy(() => TasksCreateNestedManyWithoutLabelInputObjectSchema)
      .optional(),
  })
  .strict();

export const LabelsCreateInputObjectSchema = Schema;
