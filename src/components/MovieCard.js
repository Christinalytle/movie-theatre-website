import React from 'react';
import { Card, Grid, Icon, Image} from 'semantic-ui-react'

export default class MovieCard extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            title: props.title, 
            posterUrl: props.posterUrl, 
            synopsis: props.synopsis,
            reviews: props.reviews
        }
    }


    render() {
        return(
        
            <Card fixed>
            <Image src={this.props.posterUrl} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.title}</Card.Header>
              <Card.Meta>
                <span className='date'>Rated PG</span>
              </Card.Meta>
              <Card.Description>
                {this.props.synopsis}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                {this.props.reviews.length} Reviews
              </a>
            </Card.Content>
          </Card>
      

        )
    }
}