import React, { use } from 'react';
import Post from './Post';

const Posts = ({ postsPromise }) => {
    
    
    const posts = use(postsPromise);
    console.log(posts);
    return (
        <div>
            <h2>All Posts are here: {posts.length}</h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;