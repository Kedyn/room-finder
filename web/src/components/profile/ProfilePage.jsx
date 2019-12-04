import React, { Component } from "react";
import ProfileArea from "./ProfileArea";
import dog from "golden-retriever-puppy.jpg";
import avatar from "./Profile.css";

class ProfilePage extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ padding: "40px" }} className="row">
          <div className="col s12 m6">
            <img style={avatar} src={dog} width="400" length="300" />
          </div>
          <div className="col s12 m6 offset-m1">
            <ProfileArea username="Phuc" emailAddress="asdf@gmail.com" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
