import React, { Component } from "react";

const ProfileArea = props => {
  return (
    <div>
      <p>Name: {props.username}</p>
      <p>Email: {props.emailAddress}</p>
    </div>
  );
};
export default ProfileArea;
