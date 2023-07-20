import { z } from 'zod';

export const AccountScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'type',
  'provider',
  'providerAccountId',
  'refresh_token',
  'access_token',
  'refresh_token_expires_in',
  'expires_at',
  'token_type',
  'scope',
  'id_token',
  'session_state',
]);
