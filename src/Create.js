import React, { useState } from 'react';
import supabase from './supabase';
import { useHistory } from "react-router-dom";
const Create = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const history = useHistory();

  const handleTitleChange = (e) => {
    setBlogTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setBlogContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert data into the "Blogs" table
    const { data, error } = await supabase
      .from("Blogs")
      .insert([{ title: blogTitle, content: blogContent }]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
      // Reset form values
      setBlogTitle("");
      setBlogContent("");
       history.push("/");
    }
  };

  return (
    <div className='create'>

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="blogTitle">Blog Title:</label>
        <input
          type="text"
          id="blogTitle"
          value={blogTitle}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="blogContent">Blog Content:</label>
        <textarea
          id="blogContent"
          value={blogContent}
          onChange={handleContentChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Create;