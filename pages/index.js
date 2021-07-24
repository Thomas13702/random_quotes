import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { NEXT_URL } from "../config/index";

export default function Home() {
  const [quote, setQuote] = useState({
    quote: "",
  });

  const getQuote = async () => {
    const res = await fetch(`${NEXT_URL}/api/getQuotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setQuote(await res.json());
    console.log(quote);
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to the reasons I love you website</h1>

      <div>
        <button className={styles.button} onClick={getQuote}>
          Get a reason
        </button>
      </div>
      <h2 className={styles.quote}>{quote.quote}</h2>
    </div>
  );
}
