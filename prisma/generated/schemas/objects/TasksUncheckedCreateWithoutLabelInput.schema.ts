import { z } from 'zod';
import { PrioritySchema } from '../enums/Priority.schema';
import { StatusSchema } from '../enums/Status.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksUncheckedCreateWithoutLabelInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    deadline: z.string(),
    priority: z.lazy(() => PrioritySchema).optional(),
    status: z.lazy(() => StatusSchema).optional(),
  })
  .strict();

export const TasksUncheckedCreateWithoutLabelInputObjectSchema = Schema;
