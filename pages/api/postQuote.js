import connectDB from "../../middleware/mongodb";

import Quote from "../../models/quote";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const newQuote = new Quote({
        quote: req.body.quote,
      });

      const quote = await newQuote.save();

      res.json(quote);
    } catch (err) {
      res.status(500).send("Server Error");
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};

export default connectDB(handler);
