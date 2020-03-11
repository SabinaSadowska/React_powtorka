import React, { Component } from 'react';

class Post extends Component {
    render() {
        return <div>
            <h2>{this.props.postTitle}</h2>
            <p>{this.props.post}</p>
        </div>
    }
}

export default Post