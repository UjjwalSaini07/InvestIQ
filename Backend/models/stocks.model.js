const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    ticker: { type: String, required: true },
    exchange: { type: String, required: true },
    current_price: { type: Number, required: true },
    market_cap: Number,
    previous_close: Number,
    high: Number,
    low: Number,
    stock_pe: Number,
    dividend_yield: Number,
    roce: Number,
    roe: Number,
    face_value: Number,
}, {
    collection: "Stocks"
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
