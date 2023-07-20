import { z } from 'zod';
import { TasksWhereInputObjectSchema } from './objects/TasksWhereInput.schema';
import { TasksOrderByWithAggregationInputObjectSchema } from './objects/TasksOrderByWithAggregationInput.schema';
import { TasksScalarWhereWithAggregatesInputObjectSchema } from './objects/TasksScalarWhereWithAggregatesInput.schema';
import { TasksScalarFieldEnumSchema } from './enums/TasksScalarFieldEnum.schema';

export const TasksGroupBySchema = z.object({
  where: TasksWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TasksOrderByWithAggregationInputObjectSchema,
      TasksOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TasksScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TasksScalarFieldEnumSchema),
});
