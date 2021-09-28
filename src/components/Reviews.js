import React, {useState} from 'react'; 
import {Card, Image} from 'semantic-ui-css'


function Reviews({posterUrl, title, synopsis, reviews}) {

    // const [review, setReview] = useState(''); 

    return (
        <Card fixed>
        <Image src={posterUrl} wrapped ui={false} size='small' />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className='date'>Rated PG</span>
          </Card.Meta>
          <Card.Description>
            {synopsis}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {reviews.review} Reviews
          </a>
        </Card.Content>
      </Card>
    )


}

export default Reviews; 