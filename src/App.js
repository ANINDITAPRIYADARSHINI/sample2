import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar logo="background.png" />
      <Header />
      <section>{cards}</section>
    </div>
  );
}
