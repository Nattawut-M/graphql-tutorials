const { UserList, MovieList } = require("../data");

const resolvers = {
    Query: {
        getUserList() {
            return UserList;
        }
    }
};

module.exports = {
    resolvers
};
