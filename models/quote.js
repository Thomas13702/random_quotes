import mongoose from "mongoose";
var Schema = mongoose.Schema;

var quote = new Schema({
  quote: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var Quote = mongoose.model("Quote", quote);

export default Quote;
