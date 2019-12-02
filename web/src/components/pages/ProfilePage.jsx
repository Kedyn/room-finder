import React, { Component } from "react";
import dog from "golden-retriever-puppy.jpg";
import ProfileArea from "components/pages/ProfilePage";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <ProfileArea username="Phuc" emailAddress="asdf@gmail.com" />
      </div>
    );
  }
}

export default ProfilePage;
