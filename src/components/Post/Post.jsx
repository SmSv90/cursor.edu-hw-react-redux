import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../../store";

import checkSign from '../../assets/postPage/approval-symbol-in-badge.png';
import downSign from '../../assets/postPage/down-chevron.png';
import heartSign from '../../assets/postPage/heart.png';
import commentSign from '../../assets/postPage/speech-bubble.png';
import retweetSign from '../../assets/postPage/retweet.png';
import uploadSign from '../../assets/postPage/upload.png';
import './Post.css'

// eslint-disable-next-line no-unused-vars
const Post = (props) => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const [comment, setComment] = useState(0);
  const [retweet, setRetweet] = useState(0);
  const [like, setLike] = useState(0);

  const handleCount = event => {
    switch (event.target.name) {
      case "comment":
        comment === 0 ? setComment(comment + 1) : setComment(comment - 1);
        dispatch(changeCount({comment}));
        break;
      case "retweet":
        retweet === 0 ? setRetweet(retweet + 1) : setRetweet(retweet - 1);
        dispatch(changeCount({retweet}));
        break;
      case "like":
       like === 0 ? setLike(like + 1) : setLike(like - 1);
        dispatch(changeCount({like}));
        break;
      default:
        break;
    }

  }

  return (
      posts.map(post => (
      <div className="wrapper__post" key={post.id}>
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
        <div className="social-comment">
          <img name="comment" src={commentSign} alt="comment" onClick={handleCount} /> 
          {post.comment}
        </div>
        <div className="social-retweet"><img name="retweet" src={retweetSign} alt="retweet" onClick={handleCount} /> {post.retweet}</div>
        <div className="social-like"><img name="like" src={heartSign} alt="heart" onClick={handleCount} /> {post.like}</div>
        <div className="social-share"><img src={uploadSign} alt="upload" /></div>
      </div>
    </div>
    ))

  )
}

export default Post;