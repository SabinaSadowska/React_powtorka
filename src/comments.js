import React, { Component } from 'react'

class Comments extends Component {
    render() {
        return <div>
            <h2>{this.props.comment}</h2>
        </div>
    }
}

export default Comments