import React from "react";
import blogData from "../data/blog";

import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";



function App () {

  return (
  
  <>
  <Header name={blogData.name}/>
  <About  about={blogData.about}  image={blogData.image}/>
  <ArticleList articles={blogData.posts}/>
  </>
  );
}

export default App;
