import React, { Component } from 'react';

import Posts from './Posts';

import './PostLists.css';
import fakeState from '../fakeState';

class PostLists extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts : fakeState })
  }

  render() {
    return (
        <>
          <div className="postList">
            { this.state.posts.length === 0 && <h3>We have no Posts yet.</h3> }
            { this.state.posts.map(post => (<Posts conteudo={post} key={post.id}/>)) }
          </div>
        </>
      );
  }
}


export default PostLists;