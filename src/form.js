import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: [],
        comments: [],
        valueComment: " ",
        valueName: " "
    }

    handleInputComment = (event) => {
        this.setState({valueComment: event.target.value})
    }
    handleInputName = (event) => {
        this.setState({valueName: event.target.value})
    }

    handleNameChange = (event) => {
        event.preventDefault()
        this.setState({
            name: [...this.state.name, this.state.valueName],
            comments: [...this.state.comments, this.state.valueComment],
            valueComment: ' ',
            valueName: ' '
        }
        )
    }

    renderComments = () => {
        
    }


    render(){
        return <div>
            <form onSubmit={this.handleNameChange}>
                <input placeholder="name" value={this.state.valueComment} onChange={this.handleInputComment}></input>
                <input placeholder="comment" value={this.state.valueName} onChange={this.handleInputName}></input>
                <input type="submit" value="ok" />
            </form>
            <div>
                {this.state.comments}
                {this.state.name}
            </div>
        </div>
    }
}

export default Form