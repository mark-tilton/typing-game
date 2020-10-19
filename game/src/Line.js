import React, { Component } from 'react'

export default class Line extends Component {
    render() {
        let text = this.props.text
        let length = this.props.text.length
        let position = this.props.position
        return (
            <ul key={text}>
                <b><span>{text.substring(0, position)}</span></b>
                <span>{text.substring(position, length)}</span>
            </ul>
        )
    }
}
