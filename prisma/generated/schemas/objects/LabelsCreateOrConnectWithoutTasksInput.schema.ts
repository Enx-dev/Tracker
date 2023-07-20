import { z } from 'zod';
import { LabelsWhereUniqueInputObjectSchema } from './LabelsWhereUniqueInput.schema';
import { LabelsCreateWithoutTasksInputObjectSchema } from './LabelsCreateWithoutTasksInput.schema';
import { LabelsUncheckedCreateWithoutTasksInputObjectSchema } from './LabelsUncheckedCreateWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabelsCreateOrConnectWithoutTasksInput> = z
  .object({
    where: z.lazy(() => LabelsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LabelsCreateWithoutTasksInputObjectSchema),
      z.lazy(() => LabelsUncheckedCreateWithoutTasksInputObjectSchema),
    ]),
  })
  .strict();

export const LabelsCreateOrConnectWithoutTasksInputObjectSchema = Schema;
