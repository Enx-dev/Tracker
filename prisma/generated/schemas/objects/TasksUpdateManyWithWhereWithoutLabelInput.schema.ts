import { z } from 'zod';
import { TasksScalarWhereInputObjectSchema } from './TasksScalarWhereInput.schema';
import { TasksUpdateManyMutationInputObjectSchema } from './TasksUpdateManyMutationInput.schema';
import { TasksUncheckedUpdateManyWithoutTasksInputObjectSchema } from './TasksUncheckedUpdateManyWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksUpdateManyWithWhereWithoutLabelInput> = z
  .object({
    where: z.lazy(() => TasksScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TasksUpdateManyMutationInputObjectSchema),
      z.lazy(() => TasksUncheckedUpdateManyWithoutTasksInputObjectSchema),
    ]),
  })
  .strict();

export const TasksUpdateManyWithWhereWithoutLabelInputObjectSchema = Schema;
