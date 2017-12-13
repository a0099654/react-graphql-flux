import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

let counter = 42;

let Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            counter: {
                type: GraphQLInt,
                resolve: () => 42
            },
            message: {
                type: GraphQLString,
                resolve: () => "hello world"
            }
        })
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
            incrementCounter: {
                type: GraphQLInt,
                resolve: () => ++counter
            }
        })
    })
});

export default Schema;