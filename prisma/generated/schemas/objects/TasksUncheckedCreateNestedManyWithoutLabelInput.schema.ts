import { z } from 'zod';
import { TasksCreateWithoutLabelInputObjectSchema } from './TasksCreateWithoutLabelInput.schema';
import { TasksUncheckedCreateWithoutLabelInputObjectSchema } from './TasksUncheckedCreateWithoutLabelInput.schema';
import { TasksCreateOrConnectWithoutLabelInputObjectSchema } from './TasksCreateOrConnectWithoutLabelInput.schema';
import { TasksCreateManyLabelInputEnvelopeObjectSchema } from './TasksCreateManyLabelInputEnvelope.schema';
import { TasksWhereUniqueInputObjectSchema } from './TasksWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksUncheckedCreateNestedManyWithoutLabelInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TasksCreateWithoutLabelInputObjectSchema),
          z.lazy(() => TasksCreateWithoutLabelInputObjectSchema).array(),
          z.lazy(() => TasksUncheckedCreateWithoutLabelInputObjectSchema),
          z
            .lazy(() => TasksUncheckedCreateWithoutLabelInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TasksCreateOrConnectWithoutLabelInputObjectSchema),
          z
            .lazy(() => TasksCreateOrConnectWithoutLabelInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TasksCreateManyLabelInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TasksWhereUniqueInputObjectSchema),
          z.lazy(() => TasksWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TasksUncheckedCreateNestedManyWithoutLabelInputObjectSchema =
  Schema;
