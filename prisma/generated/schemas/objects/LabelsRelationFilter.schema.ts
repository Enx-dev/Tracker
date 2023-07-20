import { z } from 'zod';
import { LabelsWhereInputObjectSchema } from './LabelsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabelsRelationFilter> = z
  .object({
    is: z
      .lazy(() => LabelsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => LabelsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const LabelsRelationFilterObjectSchema = Schema;
