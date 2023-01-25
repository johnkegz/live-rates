import { Document } from 'mongoose';

export interface Currency extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}