import * as mongoose from 'mongoose';

export const Currency = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
