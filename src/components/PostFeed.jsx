import React from 'react';
    import PostCard from './PostCard.jsx';

    const PostFeed = () => {
      const posts = [
        { id: 1, title: 'First Post', content: 'This is the first post.' },
        { id: 2, title: 'Second Post', content: 'This is the second post.' },
      ];

      return (
        <div className="post-feed">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      );
    };

    export default PostFeed;
