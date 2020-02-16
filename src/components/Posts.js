import React from 'react';

import Comments from './Comments';
import './Posts.css';

function Posts() {
return (
  <>
    <div className="post">
      <h3>Here we're a posts</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi atque necessitatibus voluptatum sunt, sit nesciunt delectus alias repellendus iste sequi maiores ducimus id odio facere cum optio consequatur dicta quo.</p>
      <Comments />
    </div>
  </>
  )
}

export default Posts;