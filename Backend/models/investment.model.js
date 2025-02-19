const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    cryptocurrency: {
      type: String,
      required: true,
    },
    amountInvested: {
      type: Number,
      required: true,
      min: 0,
    },
    investmentDate: {
      type: Date,
      default: Date.now,
    },
    notes: {
      type: String,
    },
    status: {
      type: String,
      enum: ['active', 'sold', 'archived'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Investment = mongoose.model('Investment', investmentSchema);

module.exports = Investment;
