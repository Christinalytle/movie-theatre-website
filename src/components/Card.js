import React from 'react'; 

export default class Card extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            title: props.title, 
            posterUrl: props.posterUrl, 
            synopsis: props.synopsis
        }
    }


    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.synopsis}</h1>
                <h1>{this.props.posterUrl}</h1>
            </div>

        )
    }
}