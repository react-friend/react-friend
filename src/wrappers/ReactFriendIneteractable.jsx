import React from "react";
import WrapperVisualizer from './WrapperVisualizer';
import '../styles/wrappers.css';

function ReactFriendInteractable(props) {
  return (
    <div class={"react-friend-interactable"}>
      <WrapperVisualizer>
        {props.children}
      </WrapperVisualizer>
    </div>
  );
}

export default ReactFriendInteractable;