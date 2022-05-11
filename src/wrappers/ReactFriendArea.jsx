import React from "react";
import '../styles/wrappers.css';

function ReactFriendArea(props) {
  return (
    <div class={"react-friend-area"} id={"react-friend-area"}>
        {props.children}
    </div>
  );
}

export default ReactFriendArea;