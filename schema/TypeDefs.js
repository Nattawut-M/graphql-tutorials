const { gql } = require('apollo-server');

const typeDefs = gql`

    enum Nationality {
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }

    # Schema
    type User {
        id: ID!
        # firstname: String
        # lastname: String
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
    }


    # GraphQL Query
    type Query {
        getUserList: [User!]!
        getUserById(id: ID!): User!
    }
`;

module.exports = {
    typeDefs
};