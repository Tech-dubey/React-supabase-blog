import React from 'react';
import supabase from './supabase';

function blogList(props) {
    let blogs = props.blogs
    const handleDelete = async (id)=>{
        const {error} = await supabase.from("Blogs").delete().eq('id',id)
        if(!error){
            alert("Deleted Successfully")
            document.location.reload()
            }else{
                console.log(error);
                }
    }
    return (
        <div className="home">
          {blogs.map((blog) => (
            <div className="blog-preview">
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <div className='create'>
              <button onClick={()=>{handleDelete(blog.id)}}>Delete</button>
              </div> 
            </div>
          ))}
        </div>
    );
}

export default blogList;