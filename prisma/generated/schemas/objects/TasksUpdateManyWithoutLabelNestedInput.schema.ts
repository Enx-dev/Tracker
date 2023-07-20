import { z } from 'zod';
import { TasksCreateWithoutLabelInputObjectSchema } from './TasksCreateWithoutLabelInput.schema';
import { TasksUncheckedCreateWithoutLabelInputObjectSchema } from './TasksUncheckedCreateWithoutLabelInput.schema';
import { TasksCreateOrConnectWithoutLabelInputObjectSchema } from './TasksCreateOrConnectWithoutLabelInput.schema';
import { TasksUpsertWithWhereUniqueWithoutLabelInputObjectSchema } from './TasksUpsertWithWhereUniqueWithoutLabelInput.schema';
import { TasksCreateManyLabelInputEnvelopeObjectSchema } from './TasksCreateManyLabelInputEnvelope.schema';
import { TasksWhereUniqueInputObjectSchema } from './TasksWhereUniqueInput.schema';
import { TasksUpdateWithWhereUniqueWithoutLabelInputObjectSchema } from './TasksUpdateWithWhereUniqueWithoutLabelInput.schema';
import { TasksUpdateManyWithWhereWithoutLabelInputObjectSchema } from './TasksUpdateManyWithWhereWithoutLabelInput.schema';
import { TasksScalarWhereInputObjectSchema } from './TasksScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksUpdateManyWithoutLabelNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TasksCreateWithoutLabelInputObjectSchema),
        z.lazy(() => TasksCreateWithoutLabelInputObjectSchema).array(),
        z.lazy(() => TasksUncheckedCreateWithoutLabelInputObjectSchema),
        z.lazy(() => TasksUncheckedCreateWithoutLabelInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TasksCreateOrConnectWithoutLabelInputObjectSchema),
        z.lazy(() => TasksCreateOrConnectWithoutLabelInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => TasksUpsertWithWhereUniqueWithoutLabelInputObjectSchema),
        z
          .lazy(() => TasksUpsertWithWhereUniqueWithoutLabelInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TasksCreateManyLabelInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => TasksWhereUniqueInputObjectSchema),
        z.lazy(() => TasksWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TasksWhereUniqueInputObjectSchema),
        z.lazy(() => TasksWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TasksWhereUniqueInputObjectSchema),
        z.lazy(() => TasksWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TasksWhereUniqueInputObjectSchema),
        z.lazy(() => TasksWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => TasksUpdateWithWhereUniqueWithoutLabelInputObjectSchema),
        z
          .lazy(() => TasksUpdateWithWhereUniqueWithoutLabelInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TasksUpdateManyWithWhereWithoutLabelInputObjectSchema),
        z
          .lazy(() => TasksUpdateManyWithWhereWithoutLabelInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TasksScalarWhereInputObjectSchema),
        z.lazy(() => TasksScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TasksUpdateManyWithoutLabelNestedInputObjectSchema = Schema;
