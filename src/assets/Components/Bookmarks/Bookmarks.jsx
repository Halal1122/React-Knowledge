import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';
const Bookmarks = ({bookMarks, markAsRead}) => {
    return (
        <div className="md: w-1/3 bg-slate-700 p-2 mt-4 pt-4">
            <div className="bg-blue-400 p-2 rounded-xl mb-4">
            <h2 className="text-2xl text-fuchsia-800 font-bold">Spent time on read: <span className="text-white">{markAsRead}</span> <span>min</span></h2>
            </div>
            <h2 className="text-2xl text-white font-semibold bg-blue-400 p-2 rounded-xl mb-4">Bookmarked Blog: 
            <span className="text-red-800 font-semibold text-3xl "> {bookMarks.length}</span></h2>
            {
                bookMarks.map(bookMark=><Bookmark key={bookMarks.id} bookmark={bookMark}></Bookmark>)
            }
            
            
        </div>
    );
};
Bookmarks.propTypes={
    bookMarks: PropTypes.array,
    markAsRead: PropTypes.number
}

export default Bookmarks;