import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

import { resolvers } from './src/graphql/resolvers/index.js';
import { Book } from './src/graphql/types/index.js';

const SchemaDef = `
  schema {
    query: Query
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [SchemaDef, Book],
  resolvers
});

const server = new ApolloServer({
  schema
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);