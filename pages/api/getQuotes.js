// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";

import Quote from "../../models/quote";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const allQuotes = await Quote.find({});
      if (!allQuotes) {
        return res.status(400).json({ msg: "No posts found" });
      }
      const randomQuote =
        allQuotes[Math.floor(Math.random() * allQuotes.length)];

      res.json(randomQuote);
    } catch (err) {
      res.status(500).send("Server Error");
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};

export default connectDB(handler);
