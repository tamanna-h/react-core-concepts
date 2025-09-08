import React from 'react';

const Post = ({ post }) => {
    return (
        <div className='card'>
            <p>{post.body}</p>
            <p>{post.title}</p>
        </div>
    );
};

export default Post;