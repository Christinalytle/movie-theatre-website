import React from 'react';
import { Card, Grid, Icon, Image} from 'semantic-ui-react'

function MovieCard(props) {
    
        return(
        
            <Card fixed>
            <Image src={props.posterUrl} wrapped ui={false} size='small' />
            <Card.Content>
              <Card.Header>{props.title}</Card.Header>
              <Card.Meta>
                <span className='date'>Rated PG</span>
              </Card.Meta>
              <Card.Description>
                {props.synopsis}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                {props.reviews.length} Reviews
              </a>
            </Card.Content>
          </Card>
      

        )
    
}

export default MovieCard; 