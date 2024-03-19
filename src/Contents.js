import React, { useState, useEffect } from "react";
import supabase from "./supabase";
import BlogList from "./blogList"; // Assuming the component name is BlogList and not blogList

function Contents(props) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() {
    const { data } = await supabase.from("Blogs").select();
    setBlogs(data);
  }

  return <BlogList blogs={blogs} />;
}

export default Contents;
