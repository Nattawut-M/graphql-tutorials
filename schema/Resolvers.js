const { UserList, MovieList } = require("../data");

const resolvers = {
    Query: {
        getUserList: () => UserList,
        getUserById: (_, args) => {
            // args is whatever data is user passed
            console.log(`[args]\n`, args);
            return UserList.find(user => user.id == args.id);
        },
        getMovieList: () => MovieList,
        getMovieById: (_, args) => MovieList.find(movie => movie.id == args.id),
        getMovieInTheaters: (_, args) => MovieList.filter(movie => movie.isInTheaters === args.isInTheater)
    }
};

module.exports = {
    resolvers
};
