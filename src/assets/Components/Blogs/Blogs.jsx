import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookMark}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md: w-2/3">
            {
                blogs.map(blog=><Blog key={blog.id} handleBookMark={handleBookMark} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;