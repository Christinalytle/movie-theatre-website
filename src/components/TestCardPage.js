import React from 'react'; 
import { Grid, Card } from 'semantic-ui-react';
import MovieCard from './MovieCard' 


export default class TestCardPage extends React.Component {
    constructor() {
        super(); 
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.setState({loading:true})
        fetch("http://localhost:8080/movies")
         .then(response => response.json())
         .then(data => {
             this.setState({
                 movies: data
             })
         })
    }   

    render () {
        const movieCards = this.state.movies.map(movie => <MovieCard {...movie} key={movie.id} />)
 
        return (

            <Grid>
                <Grid.Row className='page-title'>
                    <Grid.Column>
                        <Card.Group stackable itemsPerRow={4}>
                            {movieCards}
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

    
            

        )
    }

}