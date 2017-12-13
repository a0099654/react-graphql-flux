import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt
} from 'graphql';

let Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            counter: {
                type: GraphQLInt,
                resolve: () => 42
            }
        })
    })
});

export default Schema;