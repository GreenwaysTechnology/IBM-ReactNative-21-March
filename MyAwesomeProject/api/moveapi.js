
export const getMoviesFromApiAsync = async () => {
    try {
        let response = await fetch(
            'https://reactnative.dev/movies.json'
        );
        let json = await response.json();
        return json.movies;
    } catch (error) {
        console.error(error);
    }
};