import React, { Component } from 'react';

import Posts from './Posts';

import './PostLists.css';

class PostLists extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://randomuser.me/api/portraits/women/82.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://randomuser.me/api/portraits/women/83.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://randomuser.me/api/portraits/women/82.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://randomuser.me/api/portraits/women/83.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render() {
    return (
        <>
          <div className="postList">
            <h2>Here we're a post list</h2>
            { this.state.posts.length === 0 && <h3>We have no Posts yet.</h3> }
            { this.state.posts.map(post => (<Posts conteudo={post} key={post.id}/>)) }
          </div>
        </>
      );
  }
}


export default PostLists;