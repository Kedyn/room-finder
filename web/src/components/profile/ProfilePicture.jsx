import React, { Component } from "react";
const ProfilePicture = props => {
  return (
    <div>
      <img alt="Avatar" src={props.picture} className="img-thumbnail" />
      <h1>
        <center>
          <b>{props.user}</b>
        </center>
      </h1>
    </div>
  );
};

export default ProfilePicture;
