import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Recipe {
    id: ID
    createdAt: Int
    title: String!
    description: String!
    imageURL: String
    servings: Number
    ingredients: [Ingredient!]!
    steps: [RecipeStep!]!
    category: [String]
    author: String
  }

  type Ingredient {
    name: String!
    amount: String!
  }

  type RecipeStep {
    step: Int!
    description: String!
  }
`;

const resolvers = {
  Query: {
    recipes: () => recipes,
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`)
});