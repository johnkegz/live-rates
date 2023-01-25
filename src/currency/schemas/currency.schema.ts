import * as mongoose from 'mongoose';

export const CurrencySchema = new mongoose.Schema({
  success: Boolean,
  terms: String,
  privacy: String,
  timestamp: Number,
  target: String,
  rates: Object
});
