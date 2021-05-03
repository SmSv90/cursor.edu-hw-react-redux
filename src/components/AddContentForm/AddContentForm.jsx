/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store";
import "./AddContentForm.css"

export const AddContentForm = (props) => {

  const authors = [
    {
      id: 0,
      name: "Choose name",
    },
    {
      id: 1,
      nickname: "@dart_vader",
      name: "Anakin Skywalker",
      avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
    },
    {
      id: 2,
      nickname: "@last_jedy",
      name: "Luke Skywalker",
      avatar: 'https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2020%2F12%2FScreen-Shot-2020-12-23-at-10.27.59-AM-850x560.jpg',
    },
    {
      id: 3,
      nickname: "@scavenger",
      name: "Rey Skywalker",
      avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-episode-9-rise-of-skywalker-rey-1580293398.jpg?crop=0.551xw:0.414xh;0.200xw,0.122xh&resize=1200:*',
    }
  ]
 
  const dispatch = useDispatch();

  const date = new Date(Date.now()).toDateString();

    const [inputValue, setInputValue] = useState({
    name: "",
    nickname: "",
    avatar: "",
    contentImage: "",
    contentText: "",
    comment : 0,
    retweet : 0,
    like : 0,
    date: date
  });
  
  const handleChange = event => {
    setInputValue({...inputValue, [event.target.name]: event.target.value});
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const searchName = event.target.name.value;
    const authorObj = authors.find(author => author.name === searchName)

    for (let key in inputValue) {
      if ((inputValue[key] == "") && (key in authorObj)) {
        inputValue[key] = authorObj[key];
      }
    }

    dispatch(createPost(inputValue));
    
    event.target.reset();

    setInputValue({    
      name: "",
      nickname: "",
      avatar: "",
      contentImage: "",
      contentText: "",
      comment : 0,
      retweet : 0,
      like : 0,
      date: date
    });
}


  return (
    <div className="addContentForm">
      
      <form onSubmit={handleSubmit}>
        <select name="name" id="name" onChange={handleChange}>
          {authors.map(author => (
            <option key={author.id} value={author.name}>{author.name}</option>
          ))}
        </select>
        <input type="url" name="contentImage" id="contentImage" size="50" placeholder="Add a link to the post image" 
          onChange={handleChange} />
        <textarea name="contentText" id="contentText" cols="50" rows="10" placeholder="Post text write here" 
          onChange={handleChange} ></textarea>
        <button className="addContentForm__submit" type="submit" value="Submit">Add post</button> 
        </form>

    </div>
  )
}