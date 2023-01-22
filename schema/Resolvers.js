const { UserList, MovieList } = require("../data");
const lodash = require("lodash");
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
    },

    Mutation: {
        createUser: (_, args) => {
            const user = args?.user;
            let lastIdx = UserList.length - 1;
            const userLatest = UserList[lastIdx];
            UserList.push({
                id: userLatest.id + 1,
                ...user
            });
            lastIdx = UserList.length - 1;
            console.log(UserList[lastIdx]);
            return user;
        },
        updateUser: (_, args) => {
            const userArgs = args?.user;
            console.log(args);
            UserList.find(user => {
                if (user.id == userArgs.id) {
                    user.id = user.id;
                    user.name = userArgs.name ?? user.name;
                    user.username = userArgs.username ?? user.username;
                    user.age = userArgs.age ?? user.age;
                    user.nationality = userArgs.nationality ?? user.nationality;
                }
            });
            return UserList[UserList.length - 1];
        },
        deleteUserById: (_, args) => {
            const { userId } = args;
            lodash.remove(UserList, (user) => user.id === Number(userId))
            return ;
        }
    }
};

module.exports = {
    resolvers
};
