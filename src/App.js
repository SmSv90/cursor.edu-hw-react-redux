import React from 'react';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Post from "./components/Post/Post";
import { loadPosts } from "./store";
import "./App.css";
import { AddContentForm } from "./components/AddContentForm/AddContentForm";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);


  return (
    <div className="App">
      <AddContentForm />
      <Post />
    </div>
  );
};

export default App;
