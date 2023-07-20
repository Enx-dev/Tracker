import { z } from 'zod';
import { LabelsCreateWithoutTasksInputObjectSchema } from './LabelsCreateWithoutTasksInput.schema';
import { LabelsUncheckedCreateWithoutTasksInputObjectSchema } from './LabelsUncheckedCreateWithoutTasksInput.schema';
import { LabelsCreateOrConnectWithoutTasksInputObjectSchema } from './LabelsCreateOrConnectWithoutTasksInput.schema';
import { LabelsWhereUniqueInputObjectSchema } from './LabelsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabelsCreateNestedOneWithoutTasksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LabelsCreateWithoutTasksInputObjectSchema),
        z.lazy(() => LabelsUncheckedCreateWithoutTasksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => LabelsCreateOrConnectWithoutTasksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => LabelsWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const LabelsCreateNestedOneWithoutTasksInputObjectSchema = Schema;
