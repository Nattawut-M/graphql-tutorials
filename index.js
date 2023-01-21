const { ApolloServer } = require('apollo-server');
const { typeDefs } = require("./schema/TypeDefs");
const { resolvers } = require("./schema/Resolvers");

const apolloServer = new ApolloServer({
    typeDefs, // everthing you has define in GraphQL, ext. Type, Schema etc. will be inside of 'typeDefs'
    resolvers // funciton is make call API such as: Call the Databases, respond data back to client etc. will be inside of 'resolvers'
});

apolloServer.listen()
    .then(({ url }) => console.log(`[APOLLO_SERVER] server is running on ${url}`))
    .catch(err => console.log(err));