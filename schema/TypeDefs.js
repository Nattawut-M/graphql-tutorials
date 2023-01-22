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

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }


    # GraphQL Query
    type Query {
        getUserList: [User!]!
        getUserById(id: ID!): User!

        getMovieList: [Movie!]!
        getMovieById(id: ID!): Movie!
        getMovieInTheaters(isInTheater: Boolean!): [Movie]!
    }
`;

module.exports = {
    typeDefs
};