module.exports = {
  client: {
    service: {
      name: 'recipe-box',
      // URL to the GraphQL API
      url: 'http://localhost:3030/graphql',
    },
    includes: [
      'src/**/*.vue',
      'src/**/*.ts',
    ],
  },
}