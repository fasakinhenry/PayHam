// appwrite.ts

import { Client, Databases, Account } from 'appwrite';

const client: Client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!); // Replace with your project ID

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);
