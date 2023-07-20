import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TasksListRelationFilterObjectSchema } from './TasksListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabelsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LabelsWhereInputObjectSchema),
        z.lazy(() => LabelsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LabelsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LabelsWhereInputObjectSchema),
        z.lazy(() => LabelsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    Tasks: z.lazy(() => TasksListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const LabelsWhereInputObjectSchema = Schema;
