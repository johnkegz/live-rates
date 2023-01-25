import { Injectable } from '@nestjs/common';

@Injectable()
export class Database {}
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MongoDB_URL),
  },
];
