import React from "react";

const ProfileInfo = props => {
  const { name, emailAddress, gender } = props;
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
