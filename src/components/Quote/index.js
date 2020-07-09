import React from "react";
import { randElement } from "../../utils/randomFuncs";

const Quote = () => {
  const quotes = [
    {
      q: "Mostly it is loss which teaches us about the worth of things.",
      a: "Arthur Schopenhauer",
    },
    {
      q:
        "The task is, not so much to see what no one has seen yet; but to think what nobody has thought yet, about that which everybody sees.",
      a: "Arthur Schopenhauer",
    },
    {
      q:
        "Empirical sciences prosecuted purely for their own sake, and without philosophic tendency are like a face without eyes.",
      a: "Arthur Schopenhauer",
    },
    {
      q:
        "Every man takes the limits of his own field of vision for the limits of the world.",
      a: "Arthur Schopenhauer",
    },
    {
      q:
        "If I take death into my life, acknowledge it, and face it squarely, I will free myself from the anxiety of death and the pettiness of life - and only then will I be free to become myself.",
      a: "Martin Heidegger",
    },
    {
      q: "The essence of technology is by no means anything technological.",
      a: "Martin Heidegger",
    },
    {
      q:
        'Those who are most sensitive about "politically incorrect" terminology are not the average black ghetto-dweller, Asian immigrant, abused woman or disabled person, but a minority of activists, many of whom do not even belong to any "oppressed" group but come from privileged strata of society.',
      a: "Theodore Kaczynski",
    },
    {
      q:
        "The conservatives are fools: They whine about the decay of traditional values, yet they enthusiastically support technological progress and economic growth. Apparently it never occurs to them that you can't make rapid, drastic changes in the technology and the economy of a society without causing rapid changes in all other aspects of the society as well, and that such rapid changes inevitably break down traditional values.",
      a: "Theodore Kaczynski",
    },
    {
      q:
        "Imagine a society that subjects people to conditions that make them terribly unhappy then gives them the drugs to take away their unhappiness. Science fiction It is already happening to some extent in our own society. Instead of removing the conditions that make people depressed modern society gives them antidepressant drugs. In effect antidepressants are a means of modifying an individual's internal state in such a way as to enable him to tolerate social conditions that he would otherwise find intolerable.",
      a: "Theodore Kaczynski",
    },
  ];

  const quote = randElement(quotes);
  return (
    <div
      style={{
        width: "100%",
        height: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <span style={{ color: "white", textAlign: "center", fontSize: "17px" }}>
        “{quote.q}”
      </span>
      <span
        style={{
          color: "white",
          textAlign: "right",
          fontSize: "17px",
          marginTop: "10px",
        }}
      >
        - The Cube
      </span>
      <a
        href="/home"
        style={{
          color: "white",
          position: "absolute",
          top: "75vh",
          fontSize: "17px",
        }}
      >
        Enter
      </a>
    </div>
  );
};

export default Quote;
