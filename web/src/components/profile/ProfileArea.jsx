import React, { Component } from "react";

const ProfileInfo = props => {
  const { name, emailAddress } = props;
  return (
    <div>
      <p>
        <b>Name: </b>
        {name}
      </p>
      <p>
        <b>Email: </b>
        {emailAddress}
      </p>
      <hr />
    </div>
  );
};
export default ProfileInfo;
