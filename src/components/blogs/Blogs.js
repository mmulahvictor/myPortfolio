import React from 'react';
import Footer from '../footer/Footer';

const Blogs = () => {

  const posts = [
    {
      id: 1,
      title: 'My Journey to Becoming a Developer',
      content: 'I always knew I wanted to work in tech, and here is how I made it happen...',
    },
    {
      id: 2,
      title: 'Why I Love React',
      content: 'React has changed the way I think about building user interfaces...',
    },
    // ...
  ];

  return (
    <div>
      <div className="blog-posts">
        { posts.map( ( post ) => (
          <div key={ post.id } className="blog-post">
            <h2>{ post.title }</h2>
            <p>{ post.content }</p>
          </div>
        ) ) }
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;