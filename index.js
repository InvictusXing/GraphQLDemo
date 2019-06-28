const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolver/resolver");
const typeDefs = require("./schema/definition");

const server = new ApolloServer({ 
        typeDefs, 
        resolvers,
});

server.listen().then(({ url }) => {
        console.log(`Server read at ${url}`);
});