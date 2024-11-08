const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull } = require('graphql');
const _ = require('lodash');

const PurchaseType = new GraphQLObjectType({
    name: 'Purchase',
    fields: () => ({
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        qty: { type: GraphQLInt },
        completed: { type: GraphQLBoolean },
        userId: { type: GraphQLID }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
});

const users = [
    { id: 1, name: 'Nikita', email: 'nnn@yandex.ru', password: 'pass' },
    { id: 2, name: 'Danil', email: 'ddd@gmail.com', password: 'pass' },
    { id: 3, name: 'Sasha', email: 'sss@aaa.ru', password: 'pass'},
    { id: 3, name: 'Pasha', email: 'ppp@aaa.ru', password: 'pass'},
    { id: 3, name: 'Egor', email: 'eee@aaa.ru', password: 'pass'}
];

const purchases = []

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return users;
            }
        },
        getAllPurchases: {
            type: new GraphQLList(PurchaseType),
            resolve(parent, args) {
                return purchases;
            }
        },
        purchaseById: {
            type: PurchaseType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(purchases, { id: parseInt(args.id) });
            }
        },
        purchasesByUserId: {
            type: new GraphQLList(PurchaseType),
            args: { userId: { type: GraphQLID } },
            resolve(parent, args) {
                return _.filter(purchases, { userId: parseInt(args.userId) });
            }
        },
        userById: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(users, { id: parseInt(args.id) });
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createPurchase: {
            type: PurchaseType,
            args: {
                text: { type: new GraphQLNonNull(GraphQLString) },
                qty: { type: new GraphQLNonNull(GraphQLInt) },
                completed: { type: new GraphQLNonNull(GraphQLBoolean) },
                userId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                purchases.push({ id: purchases.length + 1, ...args });
                purchases[purchases.length - 1].userId = parseInt(purchases[purchases.length - 1].userId);
                return purchases[purchases.length - 1];
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
