import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

import { resolvers } from '../resolvers/index.js';
import { Book} from '../types.js';

const SchemaDef = `
  schema {
    query: Query
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [SchemaDef, Book],
  resolvers
});

export default schema;