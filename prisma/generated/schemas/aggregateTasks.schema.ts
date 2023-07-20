import { z } from 'zod';
import { TasksOrderByWithRelationInputObjectSchema } from './objects/TasksOrderByWithRelationInput.schema';
import { TasksWhereInputObjectSchema } from './objects/TasksWhereInput.schema';
import { TasksWhereUniqueInputObjectSchema } from './objects/TasksWhereUniqueInput.schema';
import { TasksCountAggregateInputObjectSchema } from './objects/TasksCountAggregateInput.schema';
import { TasksMinAggregateInputObjectSchema } from './objects/TasksMinAggregateInput.schema';
import { TasksMaxAggregateInputObjectSchema } from './objects/TasksMaxAggregateInput.schema';
import { TasksAvgAggregateInputObjectSchema } from './objects/TasksAvgAggregateInput.schema';
import { TasksSumAggregateInputObjectSchema } from './objects/TasksSumAggregateInput.schema';

export const TasksAggregateSchema = z.object({
  orderBy: z
    .union([
      TasksOrderByWithRelationInputObjectSchema,
      TasksOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TasksWhereInputObjectSchema.optional(),
  cursor: TasksWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TasksCountAggregateInputObjectSchema])
    .optional(),
  _min: TasksMinAggregateInputObjectSchema.optional(),
  _max: TasksMaxAggregateInputObjectSchema.optional(),
  _avg: TasksAvgAggregateInputObjectSchema.optional(),
  _sum: TasksSumAggregateInputObjectSchema.optional(),
});
