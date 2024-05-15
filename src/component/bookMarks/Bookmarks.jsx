import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-100 rounded-xl ">
            <div className='mt-6'>
                <h3 className="text-3xl text-purple-600 font-bold text-center p-4 border-2 rounded-xl">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-4xl text-center mt-6">Bookmarked Blogs: {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}
                    readingTime={readingTime}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.func,
    readingTime: PropTypes.number
}

export default Bookmarks;