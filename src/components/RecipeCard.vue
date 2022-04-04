<script lang="ts">
  import { Recipe } from '../types'

  export default {
    props: {
      recipe: {} as Recipe,
    },
    data() {
      return {

      }
    },
    computed: {},
    methods: {},
  }
</script>

<template>
  <article>
    <h1 class="recipe-title">{{recipe.title}}</h1>
    <p class="recipe-description">{{recipe.description}}</p>
  </article>
</template>

<style lang="scss" scoped>
  .recipe {
    color: #000;
    &-title {

    }
    &-description {

    }
  }
</style>