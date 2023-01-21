const { gql } = require('apollo-server');

const typeDefs = gql`
    # Schema
    type User {
        id: ID!
        firstname: String!
        lastname: String!
        username: String!
        age: Int!
        nationality: String!
    }

    # GraphQL Query
    type Query {
        getUserList: [User!]!
    }
`;

module.exports = {
    typeDefs
}