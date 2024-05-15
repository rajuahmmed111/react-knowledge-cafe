import PropTypes from 'prop-types';
import { CiBookmarkCheck } from "react-icons/ci";


const Blog = ({ blog, handleAddBookmarks, handleMarkAsRead }) => {

    const { id,cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="card bg-base-100 shadow-xl mb-20 space-y-5">
            <figure><img className='w-full rounded-sm' src={cover} /></figure>
            <div className='flex justify-between my-9'>
                <div className='flex items-center'>
                    <img className='h-20 w-20 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-3xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 mr-7'>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddBookmarks(blog)}
                        className='text-2xl text-red-400
                    '><CiBookmarkCheck></CiBookmarkCheck></button>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        hashtags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a></span>)
                    }
                </p>
                <button 
                onClick={() => handleMarkAsRead(id,reading_time)}
                className='text-purple-800 p-4 border font-bold underline'
                >Mark As Read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;