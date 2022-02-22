import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;

  return(
    <ul>
      {numbers.map((number) => <ListItem key={number.toString()} value={number} />)}
    </ul>
  );
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return(
    <div>
      {sidebar}
      <hr />
      {content}
    </div>

  );
}

const posts = [
  {id: 1, title: 'Hello world', content: 'Welcome to leaning React!'},
  {id: 2, title: 'Installation', content: 'You can install from npm'}
];

export default Blog;
