import React from "react";
import BlogPosts from "./BlogPosts/BlogPosts";
import Testimonials from "./Testimonials/Testimonials";
import Priority from "./Priority/Priority";
import Management from "./Management/Management";
import BusinessMan from "./BusinessMan/BusinessMan";
import Broom from "./Broom/Broom";
import Partners from "./Partners/Partners";
import About from "./About/About";

const Home = () => {
  return (
    <>
      <About />
      <Partners />
      <Broom />
      <BusinessMan />
      <Management />
      <Priority />
      <Testimonials />
      <BlogPosts />
    </>
  );
};

export default Home;
