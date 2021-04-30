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
      nickname: "dart_vader",
      name: "Anakin Skywalker",
      avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg'
    },
    {
      id: 2,
      nickname: "last_jedy",
      name: "Luke Skywalker",
      avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg'
    },
    {
      id: 3,
      nickname: "scavenger",
      name: "Rey Skywalker",
      avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg'
    }    
  ]

  const [contentText, setContentText] = useState(props.contentText);
  const [contentImage, setContentImage] = useState(props.contentImage);
  const [authorName, setAuthorName] = useState(props.authorName);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "contentText":
        setContentText(event.target.value)
        break;
      case "contentImage":
        setContentImage(event.target.value)
        break;
      case "authorName":
        setAuthorName(event.target.value)
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(contentText));
    dispatch(createPost(contentImage));
    dispatch(createPost(authorName));
}


  return (
    <div className="addContentForm">
      
      <form onSubmit={handleSubmit}>
        <select name="authorName" id="authorName" value={authorName} onChange={handleChange}>
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