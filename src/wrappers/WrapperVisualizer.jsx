import React from 'react';
import '../styles/wrappers.css';

export default function WrapperVisualizer(props) {
  return (
    <div class={"wrapper-visualizer"}>{props.children}</div>
  );
}
