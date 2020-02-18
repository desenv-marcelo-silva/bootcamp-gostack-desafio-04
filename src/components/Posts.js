import React from 'react';

import Comments from './Comments';
import './Posts.css';

function Posts({ conteudo }) {
  
return (
  <>
    <div className="post">
      <div className="avatar">
        <div>
          <img src={conteudo.author.avatar} />
        </div>
        <div className='post-autor-name'>
          <div>{conteudo.author.name}</div>
          <div>{conteudo.date}</div>
        </div>
      </div>
      <div><p>{conteudo.content}</p></div>
      <hr />
      { conteudo.comments.map( currentComment => (
          <Comments key={currentComment.id} comment={ currentComment } />
        ))
      }
    </div>
  </>
  )
}

export default Posts;