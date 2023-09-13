import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <img
        src={`../images/${props.logo}`}
        alt=""
        className="nav--logo"
      />
      <h2 className="nav--title">Gallery</h2>
      <h3 className="nav--credit">
        &copy;Copyright, Created & Maintained By Anindita
        Priyadarshini, 2023
      </h3>
    </nav>
  );
}
