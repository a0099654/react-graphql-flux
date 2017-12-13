import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

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
    })
});

export default Schema;