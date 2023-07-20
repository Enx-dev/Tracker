import { z } from 'zod';

export const PrioritySchema = z.enum(['HIGH', 'MEDIUM', 'LOW']);
