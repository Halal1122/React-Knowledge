import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleBookMark}) => {
    const{cover, title, author_img,
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
                    <p className='mr-4'>{reading_time}</p>
                    <button onClick={handleBookMark} className='text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <div className=''>
            <h2 className='text-3xl my-2 font-bold'>{title}</h2>
            <p className='mr-2'>{
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            </div>
        </div>
    );
};

Blog.prototype ={
    blog: PropTypes.object.isRequired
}
export default Blog;