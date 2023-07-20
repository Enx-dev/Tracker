import { z } from 'zod';
import { TasksCreateManyLabelInputObjectSchema } from './TasksCreateManyLabelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksCreateManyLabelInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TasksCreateManyLabelInputObjectSchema),
      z.lazy(() => TasksCreateManyLabelInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TasksCreateManyLabelInputEnvelopeObjectSchema = Schema;
