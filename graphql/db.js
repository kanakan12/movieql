let movies = [
    {
        id: "0",
        name: "A",
        score: 5,
    },
    {
        id: "1",
        name: "B",
        score: 4,
    },
    {
        id: "2",
        name: "C",
        score: 3,
    },
    {
        id: "3",
        name: "D",
        score: 2,
    },
    {
        id: "4",
        name: "E",
        score: 1
    },
    {
        id: "5",
        name: "F",
        score: 0
    }
]

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}