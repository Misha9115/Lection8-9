import React from 'react';
import blogPosts from './blogPosts.json';
import PropTypes from 'prop-types';

const Author = ({ username, name }) => (
  <div className="author">
    <div>username: {username}</div>
    <div>name: {name}</div>
  </div>
);
Author.propTypes  ={
  username :PropTypes.string,
  name :PropTypes.string
}
const Comment = ({ author, comment }) => (
  <li className="comment">
    <div>
      <Author {...author} />
    </div>
    <p>{comment}</p>
  </li>
);

const Comments = ({ comments }) => (
  <ul>
    {comments.map((i) => (
      <Comment {...i} key={i.id} />
    ))}
  </ul>
);
Comments.propTypes  ={
  comments : PropTypes.array
}
const BlogPosts = ({ posts }) => {
  return (
    <React.Fragment>
      {posts.map(({ id, author, body, comments }) => (
        <section key={id}>
          <Author {...author} />
          <p>{body}</p>
          <Comments comments={comments} />
        </section>
      ))}
    </React.Fragment>
  );
};
BlogPosts.propTypes  ={
  posts : PropTypes.array
}
const Task = () => {
  return (
    <div>
      <BlogPosts posts={blogPosts} />
    </div>
  );
};

export default Task;
