import { Injectable } from '@nestjs/common';

@Injectable()
export class Database {}
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://angular:gUt52CBEhmhvGnN2@cluster0.gc26hgh.mongodb.net/?retryWrites=true&w=majority'),
  },
];
