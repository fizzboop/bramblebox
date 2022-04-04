expport interface Recipe {
  title: string;
  description: string;
  imageURL: string;
  servings: number;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  category: string[]
  author: string;
}

export interface Ingredient {
  name: string;
  amount: string;
}

export interface RecipeStep {
  step: number;
  description: string; 
}
