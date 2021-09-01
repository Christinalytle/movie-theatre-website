import React from 'react'; 
import {MovieApi} from '../MovieApi'; 
import Card from './Card'; 


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
        const movieCards = this.state.movies.map(movie => <Card {...movie} key={movie.id} />)
 
        return (

          <div>
                {movieCards}
            </div>

    
            

        )
    }

}