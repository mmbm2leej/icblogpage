import React from "react";
import BlogData from "./blogposts.js";
import nl2br from "react-newline-to-break";

function Blogshow(props) {
  return (
    <div>
      <img className="Blogpic" src={BlogData[props.id].pic} />
      <h1>{BlogData[props.id].title}</h1>
      <h5>{BlogData[props.id].date}</h5>
      <p>{nl2br(BlogData[props.id].contents)}</p>
    </div>
  );
}

export default Blogshow;
