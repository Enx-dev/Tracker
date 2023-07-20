import { z } from 'zod';
import { LabelsCreateWithoutTasksInputObjectSchema } from './LabelsCreateWithoutTasksInput.schema';
import { LabelsUncheckedCreateWithoutTasksInputObjectSchema } from './LabelsUncheckedCreateWithoutTasksInput.schema';
import { LabelsCreateOrConnectWithoutTasksInputObjectSchema } from './LabelsCreateOrConnectWithoutTasksInput.schema';
import { LabelsUpsertWithoutTasksInputObjectSchema } from './LabelsUpsertWithoutTasksInput.schema';
import { LabelsWhereUniqueInputObjectSchema } from './LabelsWhereUniqueInput.schema';
import { LabelsUpdateWithoutTasksInputObjectSchema } from './LabelsUpdateWithoutTasksInput.schema';
import { LabelsUncheckedUpdateWithoutTasksInputObjectSchema } from './LabelsUncheckedUpdateWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabelsUpdateOneWithoutTasksNestedInput> = z
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
    upsert: z.lazy(() => LabelsUpsertWithoutTasksInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => LabelsWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => LabelsUpdateWithoutTasksInputObjectSchema),
        z.lazy(() => LabelsUncheckedUpdateWithoutTasksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LabelsUpdateOneWithoutTasksNestedInputObjectSchema = Schema;
