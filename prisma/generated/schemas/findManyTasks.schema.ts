import { z } from 'zod';
import { TasksOrderByWithRelationInputObjectSchema } from './objects/TasksOrderByWithRelationInput.schema';
import { TasksWhereInputObjectSchema } from './objects/TasksWhereInput.schema';
import { TasksWhereUniqueInputObjectSchema } from './objects/TasksWhereUniqueInput.schema';
import { TasksScalarFieldEnumSchema } from './enums/TasksScalarFieldEnum.schema';

export const TasksFindManySchema = z.object({
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
  distinct: z.array(TasksScalarFieldEnumSchema).optional(),
});
