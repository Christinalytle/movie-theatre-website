import React, {useState} from 'react';
import { Card, Form, Button, Icon, Image, Comment, Accordion} from 'semantic-ui-react'

function MovieCard({posterUrl, title, synopsis, reviews}) {

        const [activeIndex] = useState(0); 

        const handleClick = (e, titleProps) => {
          const { index } = titleProps
          activeIndex = this.state
          const newIndex = activeIndex === index ? -1 : index

          this.setState({ activeIndex: newIndex })
        }

        // const { activeIndex } = this.state

        return(

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
                {reviews.length} Reviews
              </a>
            </Card.Content>
            <Accordion fluid styled defaultActiveIndex={0}>
        <Accordion.Title  >
          <Icon name='dropdown' />
          Review
        </Accordion.Title>
        <Accordion.Content>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Accordion.Content>
          </Accordion>
       
          </Card>
      

        )
    
}

export default MovieCard; 