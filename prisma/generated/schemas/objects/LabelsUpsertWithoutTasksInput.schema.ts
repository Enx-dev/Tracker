import { z } from 'zod';
import { LabelsUpdateWithoutTasksInputObjectSchema } from './LabelsUpdateWithoutTasksInput.schema';
import { LabelsUncheckedUpdateWithoutTasksInputObjectSchema } from './LabelsUncheckedUpdateWithoutTasksInput.schema';
import { LabelsCreateWithoutTasksInputObjectSchema } from './LabelsCreateWithoutTasksInput.schema';
import { LabelsUncheckedCreateWithoutTasksInputObjectSchema } from './LabelsUncheckedCreateWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabelsUpsertWithoutTasksInput> = z
  .object({
    update: z.union([
      z.lazy(() => LabelsUpdateWithoutTasksInputObjectSchema),
      z.lazy(() => LabelsUncheckedUpdateWithoutTasksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LabelsCreateWithoutTasksInputObjectSchema),
      z.lazy(() => LabelsUncheckedCreateWithoutTasksInputObjectSchema),
    ]),
  })
  .strict();

export const LabelsUpsertWithoutTasksInputObjectSchema = Schema;
