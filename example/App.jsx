import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import { ReactFriend, ReactFriendArea, ReactFriendInteractable } from '../src/index';

class App extends Component{
  render(){
    return(
      <ReactFriendArea>
        <div className="App">
          <ReactFriend />
          <div className="sample-content">
            <div class="content-item">
              <ReactFriendInteractable>
                <div className="example-interactable">
                  <p>Hello from interactable</p>
                </div>
              </ReactFriendInteractable>
            </div>
            <div class="content-item">
              <ReactFriendInteractable>
                <div className="example-interactable">
                  <p>Hello from interactable</p>
                </div>
              </ReactFriendInteractable>
            </div>
            <div class="content-item">
              <ReactFriendInteractable>
                <div className="example-interactable">
                  <p>Hello from interactable</p>
                </div>
              </ReactFriendInteractable>
            </div>
            <div class="content-item">
              <ReactFriendInteractable>
                <div className="example-interactable">
                  <p>Hello from interactable</p>
                </div>
              </ReactFriendInteractable>
            </div>
          </div>
        </div>
      </ReactFriendArea>
    );
  }
}

export default hot(module)(App);