import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	perfilTypeDef,
	perfilQueries,
	perfilMutations
}from './perfiles/categories/typeDefs'

import perfileResolvers from './perfiles/categories/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		perfilTypeDef
	],
	[
		perfilQueries
	],
	[
		perfilMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		perfileResolvers
	)
});
