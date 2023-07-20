import { z } from 'zod';

export const LabelsScalarFieldEnumSchema = z.enum(['id', 'name', 'createdAt']);
