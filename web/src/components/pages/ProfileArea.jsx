import React, { Component } from "react";

const ProfileArea = (username, emailAddress) => {
  return (
    <div>
      <h1>Profile for {username}</h1>
      <ul>
        <li>Email address: {emailAddress}</li>
      </ul>
    </div>
  );
};

export default ProfileArea;
