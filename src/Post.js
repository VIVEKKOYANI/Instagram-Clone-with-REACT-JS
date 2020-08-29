import React from "react";
import "./Post.css";
import avatar from "@material-ui/core/Avatar";
import Avatar from "@material-ui/core/Avatar";

function Post({imageUrl , username, caption }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="RafehQazi"
          src="https://instagram.famd3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/116284037_209830007100141_4719853561976700450_n.jpg?_nc_ht=instagram.famd3-1.fna.fbcdn.net&_nc_ohc=EMXrG3seIxUAX9VlZvN&oh=dd8283dc515de7ce5f472b2a7e9c4b1c&oe=5F7373CC"
        />
        <h3>{username}</h3>
      </div>
      {/* headr -> avatar + username */}

      <img
        className="post__image"
        src={imageUrl}
        alt=""
      />
      {/* Image */}

      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
