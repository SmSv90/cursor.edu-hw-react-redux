import { createStore } from "redux";

let posts = [
  {
    name: "Anakin skywalker",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
    nickname: "@dart_vader",
    date: "01/01/2021",
    contentText : "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    contentImage : "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    comment : 0,
    retweet : 0,
    like : 0
  },
  {
    name: "Luke skywalker",
    avatar: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2020%2F12%2FScreen-Shot-2020-12-23-at-10.27.59-AM-850x560.jpg ",
    nickname: "@last_jedi",
    date: "02/01/2021",
    contentText : "It happened in Vegas. I was young and drunk...",
    contentImage : "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg?fit=scale",
    comment : 0,
    retweet : 0,
    like : 0
  },
]

const initialState = {
  posts: [],
  comment: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load_post":
      return {
        ...state,
        // log: console.log(action),
        // log1: console.log(state),
        posts
      };
    case "create_post":
      return {
        ...state,
        // log: console.log(action),
        // log1: console.log(state),
        posts: [...posts, action.payload],
      };
    case "change_count":
      return {
        ...state,
        // log: console.log(action),
        // log1: console.log(state),
        comment: [state.comment, action.payload],
      };
    default:
      return state;
  }
};

export const loadPosts = () => ({
  type: "load_post",
});

export const createPost = (value) => ({
  type: "create_post",
  payload: value
});

export const changeCount = (value) => ({
  type: "change_count",
  payload: value
})

const store = createStore(reducer);

export default store;