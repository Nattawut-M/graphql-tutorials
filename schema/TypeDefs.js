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
        firstname: String!
        lastname: String!
        username: String!
        age: Int!
        nationality: Nationality!
    }


    # GraphQL Query
    type Query {
        getUserList: [User!]!
    }
`;

module.exports = {
    typeDefs
};