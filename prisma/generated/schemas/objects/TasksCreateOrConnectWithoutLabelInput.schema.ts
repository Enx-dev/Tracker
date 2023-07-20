import { z } from 'zod';
import { TasksWhereUniqueInputObjectSchema } from './TasksWhereUniqueInput.schema';
import { TasksCreateWithoutLabelInputObjectSchema } from './TasksCreateWithoutLabelInput.schema';
import { TasksUncheckedCreateWithoutLabelInputObjectSchema } from './TasksUncheckedCreateWithoutLabelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksCreateOrConnectWithoutLabelInput> = z
  .object({
    where: z.lazy(() => TasksWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TasksCreateWithoutLabelInputObjectSchema),
      z.lazy(() => TasksUncheckedCreateWithoutLabelInputObjectSchema),
    ]),
  })
  .strict();

export const TasksCreateOrConnectWithoutLabelInputObjectSchema = Schema;
