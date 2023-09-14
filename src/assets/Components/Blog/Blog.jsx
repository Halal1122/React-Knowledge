import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleBookMark, setMarkAsReadBtn}) => {
    const{cover, title, author_img, id,
         author, reading_time, posted_date, hashtags}= blog;
    return (
        <div className="blog-container mb-8">
            <img className='w-9/12 h-11/12' src={cover} alt="" />
            <div className='flex justify-between my-8'>
                <div className='flex justify-center items-center'>
                    <img className='w-14 h-14 my-2 ' src={author_img} alt="" />
                    <div className='w-40 text-1xl ml-4'>
                        <h4 className=''>{author}</h4>
                        <h3>{posted_date}</h3>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <p className='mr-4'>{reading_time} min read</p>
                    <button onClick={()=>handleBookMark(blog)} className='text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <div className=''>
            <h2 className='text-3xl my-2 font-bold'>{title}</h2>
            <p className='mr-2'>{
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>setMarkAsReadBtn(id, reading_time)} className='underline text-cyan-400 mt-2'>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func,
    setMarkAsReadBtn: PropTypes.func
        
    }
export default Blog;