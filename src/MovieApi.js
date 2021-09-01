const MOVIE_ENDPOINT = 'http://localhost:8080/movies'


class MovieApi {
    get = async () => {
        try {
            const resp = await fetch(MOVIE_ENDPOINT); 
            const data = await resp.json(); 
            return data; 
        } catch(e) {
            console.log('Issue getting', e);
        }
    }
}