import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { NEXT_URL } from "../config/index";

export default function postQuote() {
  const [quote, setQuote] = useState({
    quote: "",
  });

  const postQuote = async (e) => {
    e.preventDefault();
    const res = await fetch(`${NEXT_URL}/api/postQuote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quote),
    });

    console.log(quote);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuote({ ...quote, [name]: value });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={postQuote}>
        <input
          type="text"
          name="quote"
          id="quote"
          onChange={handleInputChange}
          value={quote.quote}
        />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
}
