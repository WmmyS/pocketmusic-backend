import { registerAs } from '@nestjs/config';

export interface SearchCredentialsType {
  auth: string;
  context: string;
}

export default registerAs(
  'SearchCredentials',
  (): SearchCredentialsType => ({
    auth: process.env.GOOGLE_API_KEY,
    context: process.env.GOOGLE_ENG_ID,
  }),
);
