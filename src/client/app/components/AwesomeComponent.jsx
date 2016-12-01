import React from 'react';
import { BaseComponent } from './BaseComponent.jsx';

export default class AwesomeComponent extends BaseComponent {
    constructor(props) {
        super(props);


        this.state = { likesCount: 0 };
        this.onLike = this.onLike.bind(this);
    }

    onLike() {
        this.setState({ likesCount: this.state.likesCount + 1 });
    }

    render() {
        return (
            <div>
                <h3>Likes</h3>
                Likes: <span>{this.state.likesCount}</span>
                <div><button onClick={this.onLike}>Like Me</button></div>
            </div>
        );
    }

}
