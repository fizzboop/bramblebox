<script lang="ts">
  import RecipeCard from '../components/RecipeCard.vue';

  export default {
  components: {
    RecipeCard,
  },
  data() {
    return {
      recipeData: sampleRecipe,
    }
  },
  methods: {

  },
}

const sampleRecipe = {
  title: 'Challah, Wild Mushroom, & Herb Stuffing',
  description: 'This stuffing crispy on top and loaded with an earthy, buttery mix of onions and vegetables.',
  author: 'Once Upon a Chef',
  imageURL: null,
  servings: 6,
  ingredients: [
    {
      name: 'large loaf challah',
      amount: '1',
    },
    {
      name: 'unsalted butter',
      amount: '1 stick',
    },
    {
      name: 'diced yellow onion',
      amount: '2 cups',
    },
    {
      name: 'diced celery',
      amount: '2 cups',
    },
    {
      name: 'diced wild mushroom',
      amount: '2 cups',
    },
    {
      name: 'finely chopped fresh thyme',
      amount: '2 tablespoons',
    },
    {
      name: 'finely chopped fresh rosemary',
      amount: '1 tablespoon',
    },
    {
      name: 'finely chopped fresh sage',
      amount: '1/2 teaspoon',
    },
    {
      name: 'finely chopped fresh rosemary',
      amount: '1 tablespoon',
    },
    {
      name: 'chicken broth',
      amount: '3 cups',
    },
  ],
}
</script>

<template>
  <main>
    <section>
      <RecipeCard :recipe="recipeData" />
    </section>
  </main>
</template>

<style lang="scss">
</style>