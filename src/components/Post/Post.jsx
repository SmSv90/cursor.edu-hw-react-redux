import React from 'react';
import { useSelector } from "react-redux";

import checkSign from '../../assets/postPage/approval-symbol-in-badge.png';
import downSign from '../../assets/postPage/down-chevron.png';
import heartSign from '../../assets/postPage/heart.png';
import commentSign from '../../assets/postPage/speech-bubble.png';
import retweetSign from '../../assets/postPage/retweet.png';
import uploadSign from '../../assets/postPage/upload.png';
import './Post.css'

const Post = (props) => {
  const posts = useSelector((state) => state.posts);

  return (
      posts.map(post => (
      <div className="wrapper__post">
      <div className="author">
        <div className="author-avatar"><img src={post.avatar} alt="avatar" /></div>
        <div className="author-info">
          <div className="author-name">{post.name}</div>
          <div className="author-icon"><img src={checkSign} alt="check" /></div>
          <div className="author-nickname">{post.nickname}</div>
          <div className="date">{post.date}</div>
          <div className="info-option"><img src={downSign} alt="arrow-down" /></div>
        </div>
      </div>
      <div className="content">
        <div className="content-text">{post.contentText}</div>
        <div className="content-image"><img src={post.contentImage} alt="image" /></div>
      </div>
      <div className="social">
        <div className="social-comment"><img src={commentSign} alt="comment" /> {post.comment}</div>
        <div className="social-retweet"><img src={retweetSign} alt="retweet" /> {post.retweet}</div>
        <div className="social-like"><img src={heartSign} alt="heart" /> {post.like}</div>
        <div className="social-share"><img src={uploadSign} alt="upload" /></div>
      </div>
    </div>
    ))

  )
}

export default Post;