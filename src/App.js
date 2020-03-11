import React from 'react';
import Title from './title';
import Post from './post';
import Comments from './comments'

const title = "Moj blog";
const postTitle = 'Lorem Ipsum';
const post = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
const comment='Comments:'

function App () {
    return <div>
      <Title title={title} />
      <Post postTitle={postTitle} post={post} />
      <Comments comment={comment}/>
    </div>
  }

export default App;
