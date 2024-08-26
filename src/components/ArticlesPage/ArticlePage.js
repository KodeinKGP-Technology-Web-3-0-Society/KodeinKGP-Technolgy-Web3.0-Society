import React from "react";
import "./ArticlePage.css";
import data from "./data.json";
import Lottie from "lottie-react";
import Article from "./article-anim.json";

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
      <div className="head-anim">
        {/* <h3 className="read-now">READ NOW</h3> */}
        <div className="intro-container">
          <h1 className="article-heading">Articles</h1>
          <div className="sub-lines">
            <h2>Your Gateway to AI, Web Dev, and Blockchain</h2>
            <h3>
              Explore cutting-edge trends and insights shaping the future of
              technology.
            </h3>
          </div>
        </div>
        <div className="animation">
          <Lottie animationData={Article} />
        </div>
      </div>
      <div className="articles-container">
        <div className="badge">
          <div className="big-card ">{cards[0]}</div>
          <div class="ribbon">
            <div className="rib">
              <span>New</span>
            </div>
          </div>
        </div>

        <div className="small-cards">{cards.slice(1)}</div>
      </div>
    </div>
  );
}

export default ArticlePage;
