import React from 'react';

import './Comments.css';

function Comments({ comment }) {
return (
  <>
    <div className="comments">
      <div className="comment-avatar">
        <div>
          <img src={comment.author.avatar} />
        </div>
        <div className="comment-content"><p><strong>{comment.author.name}</strong> {comment.content}</p></div>
      </div>
    </div>
  </>
  )
}

export default Comments;