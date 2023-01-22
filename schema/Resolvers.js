const { UserList, MovieList } = require("../data");

const resolvers = {
    Query: {
        getUserList: () => UserList,
        getUserById: (_, args) => {
            // args is whatever data is user passed
            console.log(`[args]\n`, args)
            return UserList.find(user => user.id == args.id);
        }
    }
};

module.exports = {
    resolvers
};
