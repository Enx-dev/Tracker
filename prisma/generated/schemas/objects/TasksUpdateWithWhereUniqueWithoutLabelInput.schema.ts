import { z } from 'zod';
import { TasksWhereUniqueInputObjectSchema } from './TasksWhereUniqueInput.schema';
import { TasksUpdateWithoutLabelInputObjectSchema } from './TasksUpdateWithoutLabelInput.schema';
import { TasksUncheckedUpdateWithoutLabelInputObjectSchema } from './TasksUncheckedUpdateWithoutLabelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksUpdateWithWhereUniqueWithoutLabelInput> = z
  .object({
    where: z.lazy(() => TasksWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TasksUpdateWithoutLabelInputObjectSchema),
      z.lazy(() => TasksUncheckedUpdateWithoutLabelInputObjectSchema),
    ]),
  })
  .strict();

export const TasksUpdateWithWhereUniqueWithoutLabelInputObjectSchema = Schema;
