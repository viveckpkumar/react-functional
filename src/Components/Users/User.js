import React from "react";
const User = () => {
  return (
    <div className="card text-center">
      <img
        src="https://avatars3.githubusercontent.com/u/54106367?v=4"
        alt="Users Image"
        className="round-img"
        style={{ width: "120px" }}
      />
      <h3>Username</h3>
      <a
        href="https://github.com/mansoor-17"
        className="btn btn-dark btn-sm my-1"
      >
        {" "}
        Github Profile
      </a>
    </div>
  );
};

export default User;
