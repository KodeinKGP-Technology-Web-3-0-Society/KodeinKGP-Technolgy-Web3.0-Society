import React from "react";
import "./ArticlePage.css";
import data from "./data.json";

function ArticlePage() {
  let cards = data.map((info) => {
    return (
      <a className="article-card" href={info.link} target="_blank">
        <img src={info.img} alt="" />
        <div className="article-details">
          <h3>{info.pubDate}</h3>
          <h1>{info.title}</h1>
        </div>
      </a>
    );
  });
  return (
    <div className="article-content">
      <h1 className="article-heading">ARTICLES</h1>
      <div className="articles-container">
        <div className="big-card">{cards[0]}</div>
        <div className="small-cards">{cards.slice(1)}</div>
      </div>
    </div>
  );
}

export default ArticlePage;
