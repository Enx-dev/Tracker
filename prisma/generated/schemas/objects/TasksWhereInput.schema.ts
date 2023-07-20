import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumPriorityFilterObjectSchema } from './EnumPriorityFilter.schema';
import { PrioritySchema } from '../enums/Priority.schema';
import { EnumStatusFilterObjectSchema } from './EnumStatusFilter.schema';
import { StatusSchema } from '../enums/Status.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { LabelsRelationFilterObjectSchema } from './LabelsRelationFilter.schema';
import { LabelsWhereInputObjectSchema } from './LabelsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TasksWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TasksWhereInputObjectSchema),
        z.lazy(() => TasksWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TasksWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TasksWhereInputObjectSchema),
        z.lazy(() => TasksWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    deadline: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    priority: z
      .union([
        z.lazy(() => EnumPriorityFilterObjectSchema),
        z.lazy(() => PrioritySchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumStatusFilterObjectSchema),
        z.lazy(() => StatusSchema),
      ])
      .optional(),
    labelsId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    label: z
      .union([
        z.lazy(() => LabelsRelationFilterObjectSchema),
        z.lazy(() => LabelsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const TasksWhereInputObjectSchema = Schema;
