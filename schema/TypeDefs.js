const { gql } = require('apollo-server');

const typeDefs = gql`

    enum Nationality {
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
        USA
    }

    input CreateUser {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = USA # default value
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
        favoriteMovies: [Movie] # favorite movies can be null because some user not have favorite movie.
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

    # GraphQL Mutations
    type Mutation {
        createUser(user: CreateUser!): User
    }
`;

module.exports = {
    typeDefs
};