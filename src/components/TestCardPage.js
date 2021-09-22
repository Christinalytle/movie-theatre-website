import React, {useState, useEffect} from 'react'; 
import { Grid, Card } from 'semantic-ui-react';
import MovieCard from './MovieCard' 
import axios from 'axios'; 


export default function TestCardPage(){
    // constructor() {
    //     super(); 
    //     this.state = {
    //         movies: []
    //     }
    // }

    // componentDidMount() {
    //     this.setState({loading:true})
    //     fetch("http://localhost:8080/movies")
    //      .then(response => response.json())
    //      .then(data => {
    //          this.setState({
    //              movies: data
    //          })
    //      })
    // }   

        const [movies, setMovies] = useState([]); 

        useEffect(() => {
            getMovies()
        },[]); 


        async function getMovies() {
            await axios("http://localhost:8080/movies")
            .then((response) => {
                setMovies(response.data)
            })
        }

    
        const movieCards =  movies.map(movie => <MovieCard {...movie} key={movie.id} />)
 
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