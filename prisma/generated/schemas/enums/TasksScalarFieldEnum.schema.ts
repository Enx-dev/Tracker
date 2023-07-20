import { z } from 'zod';

export const TasksScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'createdAt',
  'deadline',
  'priority',
  'status',
  'labelsId',
]);
