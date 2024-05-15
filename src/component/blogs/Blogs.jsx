import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddBookmarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            {
                blogs.map((blog) => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddBookmarks={handleAddBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;