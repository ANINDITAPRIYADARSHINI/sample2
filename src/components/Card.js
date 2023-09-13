import React from "react";

export default function Card(props) {
  return (
    <main className="card--container">
      <div id="card">
        <img
          src={`../images/${props.item.coverImg}`}
          alt=""
          className="card--img"
        />
      </div>
      <div className="card--over">
        <h3 className="card--title">{props.item.title}</h3>
        <p className="card--detail">
          {props.item.description}
        </p>
        <li className="card--stack">{props.item.stack1}</li>
        <li className="card--stack">{props.item.stack2}</li>
        <br />
        <button
          className="card--btn"
          href="{props.item.viewLive}"
        >
          {" "}
          VIEW LIVE
        </button>
        <button
          className="card--btn"
          href="{props.item.githubUrl}"
        >
          {" "}
          GITHUB
        </button>
      </div>
    </main>
  );
}
