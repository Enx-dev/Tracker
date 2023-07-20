import { z } from 'zod';
import { TasksWhereUniqueInputObjectSchema } from './TasksWhereUniqueInput.schema';
import { TasksUpdateWithoutLabelInputObjectSchema } from './TasksUpdateWithoutLabelInput.schema';
import { TasksUncheckedUpdateWithoutLabelInputObjectSchema } from './TasksUncheckedUpdateWithoutLabelInput.schema';
import { TasksCreateWithoutLabelInputObjectSchema } from './TasksCreateWithoutLabelInput.schema';
import { TasksUncheckedCreateWithoutLabelInputObjectSchema } from './TasksUncheckedCreateWithoutLabelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksUpsertWithWhereUniqueWithoutLabelInput> = z
  .object({
    where: z.lazy(() => TasksWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TasksUpdateWithoutLabelInputObjectSchema),
      z.lazy(() => TasksUncheckedUpdateWithoutLabelInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TasksCreateWithoutLabelInputObjectSchema),
      z.lazy(() => TasksUncheckedCreateWithoutLabelInputObjectSchema),
    ]),
  })
  .strict();

export const TasksUpsertWithWhereUniqueWithoutLabelInputObjectSchema = Schema;
