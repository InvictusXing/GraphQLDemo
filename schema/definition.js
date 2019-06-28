const { ApolloServer, gql } = require('apollo-server');
 
// The GraphQL schema construction
const typeDefs = gql`
  type Person {
          id: ID!
          name: String!
          height: String!
          mass: String!
          hair_color: String!
          skin_color: String!
          eye_color: String!
          birth_year: String!
          gender: String!
  }

  type Query {
          persons(filter: personFilter): [Person!]!
  }

  input personFilter {
          id: ID
          name: String
          height: String
          mass: String
          hair_color: String
          skin_color: String
          eye_color: String
          birth_year: String
          gender: String
  }

  type Mutation {
          createPerson(name: String!, height: String!, mass: String!, hair_color: String!, skin_color: String!, eye_color: String!, birth_year: String!, gender: String!): Person
  }
`;

module.exports = typeDefs;