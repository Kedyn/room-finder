import React, { Component } from "react";
import ProfileInfo from "./ProfileArea";
import dog from "golden-retriever-puppy.jpg";
import ProfilePicture from "./ProfilePicture";

class ProfilePage extends Component {
  state = {
    user: "Landlord",
    name: "Phuc",
    emailAddress: "asdf@gmail.com"
  };
  render() {
    let { user, name, emailAddress } = this.state;
    return (
      <div className="container">
        <div style={{ padding: "40px" }} className="row">
          <div className="col s12 m6">
            <ProfilePicture user={user} picture={dog} />
          </div>
          <div className="col s12 m6 offset-m1">
            <ProfileInfo name={name} emailAddress={emailAddress} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
