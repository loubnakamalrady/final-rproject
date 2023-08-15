import React from 'react';
import { connect } from 'react-redux';
import './Home.css'; // Import CSS file for component-specific styles

const Home = ({ posts }) => {
  return (
    <div className="home-container"> {/* Apply styles using a CSS class */}
      <h1>Welcome to the Home Page</h1>
      <p>This is a sample home page content.</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.blog.posts
  };
};

export default connect(mapStateToProps)(Home);