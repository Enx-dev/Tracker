import { z } from 'zod';

export const StatusSchema = z.enum(['TODO', 'PENDING', 'COMPLETED']);
