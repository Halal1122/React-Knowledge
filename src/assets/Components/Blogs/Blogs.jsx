import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookMark, setMarkAsReadBtn}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md: w-2/3">
            {
                blogs.map(blog=><Blog key={blog.id} handleBookMark={handleBookMark} 
                    setMarkAsReadBtn={setMarkAsReadBtn} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleBookMark: PropTypes.object.isRequired,
    setMarkAsReadBtn: PropTypes.object
}
export default Blogs;