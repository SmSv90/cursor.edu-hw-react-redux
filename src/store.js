import { createStore } from "redux";

const posts = [
  {
    name: "Anakin skywalker",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
    nickname: "@dart_vader",
    date: "01/01/2021",
    contentText : "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    contentImage : "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    comment : 1,
    retweet : 1,
    like : 1
  },
  {
    name: "Luke skywalker",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
    nickname: "@last_jedi",
    date: "02/01/2021",
    contentText : "It happened in Vegas. I was young and drunk...",
    contentImage : "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    comment : 0,
    retweet : 0,
    like : 0
  },
]

const initialState = {
  posts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load_post":
      return {
        ...state,
        posts
      };
    case "create_post":
      return {
        ...state,
        posts:
            JSON.stringify(state.posts).indexOf(JSON.stringify(action.payload)) === -1
                ? state.posts.concat(action.payload)
                : state.posts
      }
    default:
      return state;
  }
};

export const loadPosts = () => ({
  type: "load_post",
});

export const createPost = (post) => ({
  type: "create_post",
  payload: post
});

const store = createStore(reducer);

export default store;